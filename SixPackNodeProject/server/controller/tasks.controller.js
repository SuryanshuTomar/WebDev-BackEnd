import mongoose from "mongoose";
import { Task } from "../models/tasks.models.js";
import { createCustomError } from "../utils/errorHandler.js";

const createNewTask = async (req, res, next) => {
	try {
		const { title, description, isCompleted } = req.body;
		const { user } = req;

		// create a new task
		const task = await Task.create({
			title,
			description,
			isCompleted,
			user,
		});

		// send response
		res.status(201).json({
			success: true,
			task,
		});
	} catch (error) {
		next(error);
	}
};

const getAllTasks = async (req, res, next) => {
	try {
		// get current user _id
		const userId = req.user._id;

		// now get all task for the user who is logged in
		const tasks = await Task.find({ user: userId });

		res.status(200).json({
			success: true,
			tasks,
		});
	} catch (error) {
		next(error);
	}
};

const getTask = async (req, res, next) => {};

const updateTask = async (req, res, next) => {
	try {
		const { id } = req.params;

		// Check whether the it the object id provided is valid or not
		// if (!mongoose.isValidObjectId(id)) {
		// or
		if (!mongoose.Types.ObjectId.isValid(id)) {
			return next(new Error());
		}

		// check whether the task for this id exists or not
		let task = await Task.findById(id);

		// if the task doesn't exists then throw error
		if (!task) {
			return next(createCustomError("Task doesn't exists!!", 404));
		}

		// if the task exists then update the task
		task.isCompleted = !task.isCompleted;
		task = await task.save();

		//	send response with the updated task
		res.status(200).json({
			success: true,
			task,
		});
	} catch (error) {
		next(error);
	}
};

const deleteTask = async (req, res, next) => {
	try {
		const { id } = req.params;

		// Check whether the it the object id provided is valid or not
		// if (!mongoose.isValidObjectId(id)) {
		// or
		if (!mongoose.Types.ObjectId.isValid(id)) {
			return next(createCustomError("Invalid Id", 404));
		}

		// check whether the task for this id exists or not
		let task = await Task.findById(id);

		// if the task doesn't exists then throw error
		if (!task) {
			return next(createCustomError("Task doesn't exists!!", 404));
		}

		// if the task exists then delete the task
		await task.deleteOne();

		//	send response with the deleted task
		res.status(200).json({
			success: true,
			task,
		});
	} catch (error) {
		next(error);
	}
};

export { createNewTask, getAllTasks, getTask, updateTask, deleteTask };
