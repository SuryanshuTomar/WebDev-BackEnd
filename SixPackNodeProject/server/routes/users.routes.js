// imports
import express from "express";
import {
	getAllUsers,
	getUser,
	createNewUser,
} from "../controller/users.controller.js";

// Creating Router
const router = express.Router();

// Routes
router.get("/all", getAllUsers);
router.get("/:id", getUser);
router.post("/new", createNewUser);

// exports
export default router;
