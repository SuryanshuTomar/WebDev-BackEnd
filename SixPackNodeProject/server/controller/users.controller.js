import { User } from "../models/users.models.js";

const getAllUsers = async (req, res, next) => {
	const users = await User.find({});

	res.json({
		success: true,
		users,
	});
};

const getUser = async (req, res, next) => {
	const { id } = req.params;
	const user = await User.findById(id);

	res.status(200).json({
		success: true,
		user,
	});
};

const createNewUser = async (req, res, next) => {
	const { name, email, password } = req.body;

	const user = await User.create({
		name,
		email,
		password,
	});

	res.status(200).json({
		success: true,
		user,
	});
};

export { getAllUsers, createNewUser, getUser };
