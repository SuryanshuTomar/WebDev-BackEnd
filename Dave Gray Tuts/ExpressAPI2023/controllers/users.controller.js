// imports
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/users.model");

// Register User Controller
const registerUser = async (req, res, next) => {
	const { user, pass } = req.body;

	try {
		// check if both fields are present
		// status code 400 -> bad request
		if (!user || !pass) {
			return res.status(400).json({
				success: false,
				message: "Username and password are required!",
			});
		}

		// check if the user is already present in the db or not
		const userDuplicate = await User.findOne({ username: user }).exec();
		// We need to chain exec() if we are using findOne();

		// if user is already present in the DB then no need to create the user with the same username
		// status code 409 -> conflict
		if (userDuplicate)
			return res.status(409).json({
				success: false,
				message: `User ${user} already exist!`,
			});

		// encrypt the password
		const hashedPass = await bcrypt.hash(pass, 10);

		// create and store the new user in the DB
		const result = await User.create({
			username: user,
			password: hashedPass,
		});

		// send response
		res.status(201).json({
			success: true,
			data: result,
		});
		//
	} catch (error) {
		console.log(error.mesage);
		res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};

// Login User Controller
const loginUser = async (req, res, next) => {
	try {
		const { user, pass } = req.body;

		if (!user || !pass) {
			// check if both fields are present
			// status code 400 -> bad request
			return res.status(400).json({
				success: false,
				message: "Username and password are required!",
			});
		}

		// check if the user presents in the DB or not.
		const userPresent = usersDB.users.find((usr) => usr.username === user);

		// if no user present then send the response.
		if (!userPresent)
			return res.status(404).json({
				success: false,
				message: "Incorrect username or password!",
			});

		// check if pass provided is correct password or not
		const passMatch = await bcrypt.compare(pass, userPresent.password);

		// if password does not match then send response
		if (!passMatch)
			return res.status(404).json({
				success: false,
				message: "Incorrect username or password!",
			});

		// if user and password is correct, then get all the user roles specified to the current user and attach it to the payload for accessToken ->
		const roles = Object.values(userPresent.roles);

		// Both the Access token and the Refresh Token needs to be sent to the client / user.
		// Then, whenever the client need to access any resource that need authorization, the client need to send the access token with the request so that the server can verify that the request is sent by the authorized user.
		// The Access Token need not to be stored in any kind of storage in the browser by in the memory of the client. So, that it cannot be access manually using the JS. And is removed from the memory whenver the app / client/ browser is closed.

		// The Refresh token on the other hand is sent to client as well using a httpOnly cookie which also can not be access using the JS and can only be access by the client. This Refresh token is sent to refresh the access token whenever the access token expires and has a longer expiry date than the access token.

		// These tokens also expires automatically when they expires and the user should logout when these tokens expires.
		// Both the access token and the refresh token should be invalidated after the user logs out manually.

		// More on -> https://jwt.io/introduction

		// Create Access Token using JWT
		const accessToken = jwt.sign(
			{
				// private claims
				UserInfo: {
					username: userPresent.username,
					roles,
				},
			},
			process.env.ACCESS_TOKEN_SECRET,
			{ expiresIn: "30s" }
		);

		// Create Refresh Token using JWT
		const refreshToken = jwt.sign(
			{
				// no need to attach the roles here as this refresh token is created to refresh accessToken which will be used to access authorized resources
				username: userPresent.username,
			},
			process.env.REFRESH_TOKEN_SECRET,
			{ expiresIn: "1d" }
		);

		// Separate the otherUsers from DB
		const otherUsers = usersDB.users.filter(
			(usr) => usr.username !== userPresent.username
		);

		// Store the new refreshToken with the user in the DB
		// We are storing it in the DB with the user, so that when the user logs out before the refreshToken expires, we can invalidate the refreshToken so that no one can indefinitely keeps logged in without authorisation.
		const currentUser = { ...userPresent, refreshToken };

		// And now updated the currentUser in the DB.
		usersDB.setUsers([...otherUsers, currentUser]);

		// write the updated users to the db
		await fsPromises.writeFile(
			path.join(__dirname, "..", "data", "users.json"),
			JSON.stringify(usersDB.users)
		);

		// if everything is correct then send correct response
		// Note: we also have to set the property "secure: true" also along with the httpOnly property in the cookie() method with the response and this "secure" property will allow us to send the cookie along with response only to the https server.
		res.status(200)
			.cookie("reftoken", refreshToken, {
				httpOnly: true,
				sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
				secure: process.env.NODE_ENV === "Development" ? false : true,
				maxAge: 24 * 60 * 60 * 1000,
			})
			.json({
				success: true,
				data: currentUser,
				accessToken,
			});

		//
	} catch (error) {
		console.log(error.message);
		res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};

// Logout User Controller
const logoutUser = async (req, res, next) => {
	try {
		// For logout we need to do 2 things
		// 1. Remove the access token from the client side
		// 2. Remove the refresh token from the user data in DB.

		// get the cookies from the request object
		const cookies = req.cookies;

		// if the cookie does not exists or the reftoken property in cookies does not exists, then send the Unauthorized response
		if (!cookies?.reftoken) {
			// if either cookies or reftoken in cookies is missing then -> No problem cause the client is trying to logout.
			// status code 204 -> success but no content to send back
			return res.status(204).json({
				success: false,
				message: "No Content",
			});
		}

		// if the refToken is present in the cookie then
		const refreshToken = cookies.reftoken;

		// check if the user presents in the DB that matches the refreshToken that is sent to the server -> checking if the provided refreshToken is present with any of the users present in the DB or not.
		const userPresent = usersDB.users.find(
			(usr) => usr.refreshToken === refreshToken
		);

		// if no user present then -> clear the cookie that is sent to us and then send the response.
		if (!userPresent) {
			// clear the cookie
			res.clearCookie("reftoken", {
				httpOnly: true,
				sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
				secure: process.env.NODE_ENV === "Development" ? false : true,
			});

			// sending the response
			// status code 204 -> success but no content to send back
			return res.status(204).json({
				success: false,
				message: "No Content",
			});
		}

		// if the user is present in the DB -> Then we have to now delete the refreshToken from that user in the DB.
		const otherUsers = usersDB.users.filter(
			(user) => user.refreshToken !== userPresent.refreshToken
		);
		// removing the refreshToken from the user
		const currentUser = { ...userPresent, refreshToken: "" };

		// now updating the DB with
		usersDB.setUsers([...otherUsers, currentUser]);

		// now write the updated users data in the DB
		await fsPromises.writeFile(
			path.join(__dirname, "..", "data", "users.json"),
			JSON.stringify(usersDB.users)
		);

		console.log(process.env.NODE_ENV);
		// now clear the cookie and send the send response
		// Note: we have to set the property "secure: true" also along with the httpOnly property and this "secure" property will allow us to send the cookie along with response only to the https server.
		res.clearCookie("reftoken", {
			httpOnly: true,
			sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
			secure: process.env.NODE_ENV === "Development" ? false : true,
		});

		res.status(204).json({
			success: true,
			data: "No Content!",
		});

		//
	} catch (error) {
		console.log(error.message);
		res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};

// Refresh Token Controller -> This controller will provide the client with the new access token using the refresh token provided to server by the client via request object.
const handleRefreshToken = async (req, res, next) => {
	try {
		// get the cookies from the request object
		const cookies = req.cookies;

		// if the cookie does not exists or the reftoken property in cookies does not exists then send the Unauthorized response
		if (!cookies?.reftoken) {
			// if either cookies or reftoken in cookies is missing then send Unauthorized
			// status code 401 -> Unauthorized
			return res.status(401).json({
				success: false,
				message: "Not Authorized",
			});
		}

		// if the refToken is present in the cookie then
		const refreshToken = cookies.reftoken;

		// check if the user presents in the DB that matches the refreshToken that is sent to the server -> checking if the provided refreshToken is present with any of the users present in the DB or not.
		const userPresent = usersDB.users.find(
			(usr) => usr.refreshToken === refreshToken
		);

		// if no user present then send the response.
		if (!userPresent)
			return res.status(403).json({
				success: false,
				message: "Forbidden!",
			});

		// now verify the refreshToken sent to us by the client
		jwt.verify(
			refreshToken,
			process.env.REFRESH_TOKEN_SECRET,
			(err, decoded) => {
				// if the refresh token is incorrect or tampered with or if the username we found for the userPresent is not the same as the username from the decoded refreshToken then send the Forbidden response
				if (err || userPresent.username !== decoded.username) {
					return res.status(403).json({
						success: false,
						message: "Forbidden!",
					});
				}

				// Again get the user roles for the access token payload private claim
				const roles = Object.values(userPresent.roles);

				// if the valid refreshToken is provided then create a new access token
				const accessToken = jwt.sign(
					{
						UserInfo: {
							username: decoded.username,
							roles,
						},
					},
					process.env.ACCESS_TOKEN_SECRET,
					{ expiresIn: "30s" }
				);

				// send the access token via response
				res.status(200).json({
					success: true,
					accessToken,
				});
			}
		);

		//
	} catch (error) {
		console.log(error.mesage);
		res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};

module.exports = { registerUser, loginUser, logoutUser, handleRefreshToken };
