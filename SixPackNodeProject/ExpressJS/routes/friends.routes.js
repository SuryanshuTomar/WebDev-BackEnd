const express = require("express");
const {
	getFriends,
	getOneFriend,
	postFriend,
} = require("../controllers/friends.controller");

// Express Router
const friendsRouter = express.Router();

// Middleware only for friends routes
friendsRouter.use((req, res, next) => {
	console.log("Ip Address: ", req.ip);
	next();
});

// Friends Routes
friendsRouter.get("/", getFriends);
// Nested Route
friendsRouter.get("/:id", getOneFriend);
friendsRouter.post("/", postFriend);

module.exports = friendsRouter;
