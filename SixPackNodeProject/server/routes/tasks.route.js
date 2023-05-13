import express from "express";
import {
	createNewTask,
	deleteTask,
	getAllTasks,
	getTask,
	updateTask,
} from "../controller/tasks.controller.js";
import { isAuthenticated } from "../middlewares/auth.js";

const taskRouter = express.Router();

taskRouter.post("/new", isAuthenticated, createNewTask);
taskRouter.get("/all", isAuthenticated, getAllTasks);
taskRouter
	.route("/:id")
	.get(isAuthenticated, getTask)
	.put(isAuthenticated, updateTask)
	.delete(isAuthenticated, deleteTask);

export default taskRouter;
