const express = require("express");

const {
	getMessages,
	postMessage,
} = require("../controllers/messages.controller");

const messagesRouter = express.Router();

// Messages Routes
messagesRouter.get("/", getMessages);
messagesRouter.post("/", postMessage);

module.exports = messagesRouter;
