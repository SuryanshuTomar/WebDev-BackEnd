import { User } from "../models/users.models.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/features.js";
import { createCustomError } from "../utils/errorHandler.js";

const getAllUsers = async (req, res, next) => {
	try {
		const users = await User.find({});

		res.json({
			success: true,
			users,
		});
	} catch (error) {
		next(error);
	}
};

const getUserProfile = async (req, res, next) => {
	try {
		res.status(200).json({
			success: true,
			user: req.user,
		});
	} catch (error) {
		next(error);
	}
};

const registerUser = async (req, res, next) => {
	try {
		const { name, email, password } = req.body;

		// find the user and if user exists then throw error
		let user = await User.findOne({ email });
		if (user) {
			return next(createCustomError("User Already Exists!!", 404));
		}

		// Hash the password as we cannot directly store the password in db
		const hashedPassword = await bcrypt.hash(password, 10);

		// Create the user if all OK
		user = await User.create({ name, email, password: hashedPassword });

		// Now, send cookie along with response
		sendCookie(user, res, "Registered Successfully!", 201);
	} catch (error) {
		next(error);
	}
};

const loginUser = async (req, res, next) => {
	try {
		const { email, password } = req.body;

		// find the user and if user doesn't exists then throw error
		const user = await User.findOne({ email }).select("+password");
		if (!user) {
			return next(createCustomError("Incorrect Email or Password!!", 400));
		}

		// Match password if the user exists and if it doesn't match throw error
		const isPassMatched = await bcrypt.compare(password, user.password);
		if (!isPassMatched) {
			return next(createCustomError("Incorrect Email or Password!!", 400));
		}

		// Send the cookie along with the response
		sendCookie(
			user,
			res,
			"Logged In Successfully!, Welcome " + user.name,
			200
		);
	} catch (error) {
		next(error);
	}
};

const logoutUser = async (req, res, next) => {
	try {
		res.status(200)
			.cookie("token", "", {
				expires: new Date(Date.now()),
			})
			.json({
				success: true,
				user: "Logout",
			});
	} catch (error) {
		next(error);
	}
};

export { getAllUsers, getUserProfile, registerUser, loginUser, logoutUser };
