const express = require("express");
const tasksRouter = express.Router();

const {
	getAllTasks,
	createTask,
	getTask,
	updateTask,
	deleteTask,
} = require("../controllers/tasks.controller");

tasksRouter.route("/").get(getAllTasks).post(createTask);
tasksRouter.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = tasksRouter;
