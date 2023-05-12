// setting users from users.json local db
const usersDB = {
	users: require("../data/users.json"),
	setUsers: function (data) {
		this.users = data;
	},
};

// imports
const fsPromises = require("fs").promises;
const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
		const userDuplicate = usersDB.users.find((usr) => usr.username === user);

		// if user is already present in the DB then no need to create the user with the same username
		// status code 409 -> conflict
		if (userDuplicate)
			return res.status(409).json({
				success: false,
				message: `User ${user} already exist!`,
			});

		// encrypt the password
		const hashedPass = await bcrypt.hash(pass, 10);

		// create and store the new user
		const newUser = { username: user, password: hashedPass };
		usersDB.setUsers([...usersDB.users, newUser]);

		// write to localDB users.json file
		await fsPromises.writeFile(
			path.join(__dirname, "..", "data", "users.json"),
			JSON.stringify(usersDB.users)
		);

		// send response
		res.status(201).json({
			success: true,
			data: newUser,
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

		// Both the Access token and the Refresh Token needs to be sent to the client / user.
		// Then, whenever the client need to access any resource that need authorization, the client need to send the access token with the request so that the server can verify that the request is sent by the authorized user.
		// The Access Token need not to be stored in any kind of storage in the browser by in the memory of the client. So, that it cannot be access manually using the JS. And is removed from the memory whenver the app / client/ browser is closed.

		// The Refresh token on the other hand is sent to client as well using a httpOnly cookie which also can not be access using the JS and can only be access by the client. This Refresh token is sent to refresh the access token whenever the access token expires and has a longer expiry date than the access token.

		// These tokens also expires automatically when they expires and the user should logout when these tokens expires.
		// Both the access token and the refresh token should be invalidated after the user logs out manually.

		// Create Access Token from JWT
		const accessToken = jwt.sign(
			{
				username: userPresent.user,
			},
			process.env.ACCESS_TOKEN_SECRET,
			{ expiresIn: "30s" }
		);

		// Create Access Token from JWT
		const refreshToken = jwt.sign(
			{
				username: userPresent.user,
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
		res.status(200)
			.cookie("refToken", refreshToken, {
				httpOnly: true,
				maxAge: 24 * 60 * 60 * 1000,
			})
			.json({
				success: true,
				data: userPresent,
				accessToken,
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

// Refresh Token Controller -> This controller will provide the client with the new access token using the refresh token provided to server by the client via request object.
const handleRefreshToken = async (req, res, next) => {
	try {
		// get the cookies from the request object
		const cookies = req.cookies;

		// if the cookie does not exists or the token property in cookies does not exists
		// then send the Unauthorized response
		if (!cookies?.refToken) {
			// check if both fields are present
			// status code 401 -> Unauthorized
			return res.status(401).json({
				success: false,
				message: "Not Authorized",
			});
		}

		// if the refToken is present in the cookie then
		const refreshToken = cookies.refToken;

		// check if the user presents in the DB that matches the refreshToken that is sent to the server
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

				// if the valid refreshToken is provided then create a new access token
				const accessToken = jwt.sign(
					{ username: decoded.username },
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

module.exports = { registerUser, loginUser, handleRefreshToken };
