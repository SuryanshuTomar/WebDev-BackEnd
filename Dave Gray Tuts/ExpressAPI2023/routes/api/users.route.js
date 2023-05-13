const express = require("express");
const usersRouter = express().usersRouter;

const {
	registerUser,
	loginUser,
	handleRefreshToken,
	logoutUser,
} = require("../../controllers/users.controller");

// user routes
usersRouter.post("/register", registerUser);
usersRouter.post("/login", loginUser);
usersRouter.get("/logout", logoutUser);
usersRouter.get("/refreshtoken", handleRefreshToken);

module.exports = usersRouter;
