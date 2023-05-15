const express = require("express");
const usersRouter = express.Router();
const { verifyRoles } = require("../../middlewares/verifyRoles");
const { verifyToken } = require("../../middlewares/verifyToken");
const { ROLES_LIST } = require("../../config/rolesList");

const {
	registerUser,
	loginUser,
	handleRefreshToken,
	logoutUser,
	getAllUsers,
	getUser,
	deleteUser,
} = require("../../controllers/users.controller");

// user routes

usersRouter.post("/register", registerUser);
usersRouter.post("/login", loginUser);
usersRouter.get("/logout", logoutUser);
usersRouter.get("/refreshtoken", handleRefreshToken);

usersRouter
	.route("/admin")
	.get(verifyToken, verifyRoles(ROLES_LIST.Admin), getAllUsers)
	.delete(verifyToken, verifyRoles(ROLES_LIST.Admin), deleteUser);

usersRouter
	.route("/admin/:id")
	.get(verifyToken, verifyRoles(ROLES_LIST.Admin), getUser);

module.exports = usersRouter;
