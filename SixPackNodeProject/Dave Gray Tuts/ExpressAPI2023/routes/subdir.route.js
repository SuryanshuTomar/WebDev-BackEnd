// imports
const express = require("express");
const path = require("path");

// setup app subdirRouter
const subdirRouter = express.Router();

// routes
subdirRouter.get("/", (req, res) => {
	res.render("subdir/index");
});

subdirRouter.get("/test", (req, res) => {
	res.render("subdir/test");
});

// exports
module.exports = { subdirRouter };
