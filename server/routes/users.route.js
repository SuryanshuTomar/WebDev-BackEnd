// imports
import express from "express";
import {
	getAllUsers,
	getUserProfile,
	loginUser,
	logoutUser,
	registerUser,
} from "../controller/users.controller.js";
import { isAuthenticated } from "../middlewares/auth.js";

// Creating Router
const router = express.Router();

// Routes
router.get("/all", isAuthenticated, getAllUsers);
router.get("/me", isAuthenticated, getUserProfile);
router.get("/logout", logoutUser);
router.post("/new", registerUser);
router.post("/login", loginUser);

// exports
export default router;
