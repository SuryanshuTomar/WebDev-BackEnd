import { User } from "../models/users.models.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/features.js";

const getAllUsers = async (req, res, next) => {
	const users = await User.find({});

	res.json({
		success: true,
		users,
	});
};

const getUserProfile = async (req, res, next) => {
	res.status(200).json({
		success: true,
		user: req.user,
	});
};

const registerUser = async (req, res, next) => {
	const { name, email, password } = req.body;

	let user = await User.findOne({ email });

	if (user) {
		return res.status(404).json({
			success: false,
			message: "User Already Exists!",
		});
	}

	// Hash Password
	const hashedPassword = await bcrypt.hash(password, 10);

	// Create user
	user = await User.create({ name, email, password: hashedPassword });

	// send cookie as response
	sendCookie(user, res, "Registered Successfully!", 201);
};

const loginUser = async (req, res, next) => {
	const { email, password } = req.body;

	const user = await User.findOne({ email }).select("+password");

	if (!user) {
		return res.status(404).json({
			success: false,
			message: "Incorrect Email or Password!!",
		});
	}

	// Match password if the user exists
	const isPassMatched = await bcrypt.compare(password, user.password);

	if (!isPassMatched) {
		return res.status(404).json({
			success: false,
			message: "Incorrect Email or Password!!",
		});
	}

	sendCookie(user, res, "Logged In Successfully!, Welcome " + user.name, 200);
};

const logoutUser = async (req, res, next) => {
	res.status(200)
		.cookie("token", "", {
			expires: new Date(Date.now()),
		})
		.json({
			success: true,
			user: "Logout",
		});
};

export { getAllUsers, getUserProfile, registerUser, loginUser, logoutUser };
