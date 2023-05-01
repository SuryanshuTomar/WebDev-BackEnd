import { Task } from "../models/tasks.models.js";

const createNewTask = async (req, res, next) => {
	const { title, description, isCompleted } = req.body;
	const { user } = req;

	console.log(req.body);
	const task = await Task.create({
		title,
		description,
		isCompleted,
		user,
	});

	res.status(201).json({
		success: true,
		task,
	});
};

const getAllTasks = async (req, res, next) => {
	// get current user _id
	const userId = req.user._id;

	// now get all task for the user who is logged in
	const tasks = await Task.find({ user: userId });

	res.status(200).json({
		success: true,
		tasks,
	});
};

const getTask = async (req, res, next) => {};

const updateTask = async (req, res, next) => {
	const { id } = req.params;

	let task = await Task.findById(id);
	task.isCompleted = !task.isCompleted;
	task = await task.save();

	res.status(200).json({
		success: true,
		task,
	});
};

const deleteTask = async (req, res, next) => {
	const { id } = req.params;
	let task = await Task.findByIdAndDelete(id);

	res.status(200).json({
		success: true,
		task,
	});
};

export { createNewTask, getAllTasks, getTask, updateTask, deleteTask };
