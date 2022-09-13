const { findOneAndUpdate, schema } = require("../models/tasks.models");
const Task = require("../models/tasks.models");
const { put } = require("../routes/tasks.routes");

const getAllTasks = async (req, res) => {
	try {
		const tasks = await Task.find({});
		res.status(200).json({ success: true, tasks: tasks });
	} catch (err) {
		res.status(500).json({
			success: false,
			msg: err.message,
		});
	}
};

const createTask = async (req, res) => {
	try {
		const task = await Task.create(req.body);
		res.status(201).json({
			task: task,
		});
	} catch (err) {
		res.status(500).json({
			success: false,
			msg: err.message,
		});
	}
};

const getTask = async (req, res) => {
	try {
		const { id: taskId } = req.params;
		const task = await Task.findOne({ _id: taskId });

		if (!task) {
			return res.status(404).json({
				success: false,
				msg: `No task with id : ${taskId} found `,
			});
		}

		res.status(200).json({
			success: true,
			task: task,
		});
	} catch (err) {
		res.status(500).json({
			success: false,
			msg: err.message,
		});
	}
};

const updateTask = async (req, res) => {
	try {
		const { id: taskId } = req.params;
		const task = await Task.findOneAndUpdate(
			{ _id: taskId },
			req.body,
			{ new: true, runValidators: true,  }
			// { new: true, runValidators: true, overwrite:true }
			// The third paramter whic is the options object is mandatory, if we don't use this options object then :
			// 1. The findOneAndUpdate() will return the old document
			// 2. The validation for the current model will not run which we have defined in our schema.
			// 3. The overwrite:true property should be used with put() method when we want to update the old data with the new JSON data object which has a completely different structure from before. But it is rarely used.
			// Note: put() and patch() though are used interchangebly in mongoose/mongodb projects
		);

		if (!task) {
			return res.status(404).json({
				success: false,
				msg: `No task with id : ${taskId} found `,
			});
		}

		res.status(200).json({
			success: true,
			task: task,
		});
	} catch (err) {
		res.status(500).json({
			success: false,
			msg: err.message,
		});
	}
};

const deleteTask = async (req, res) => {
	try {
		const { id: taskId } = req.params;
		const task = await Task.findOneAndDelete({ _id: taskId });

		if (!task) {
			return res.status(404).json({
				success: false,
				msg: `No task found with id : ${taskId}`,
			});
		}

		res.status(200).json({
			success: true,
			task: task,
		});
	} catch (err) {
		res.status(500).json({
			success: false,
			msg: err.message,
		});
	}
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
