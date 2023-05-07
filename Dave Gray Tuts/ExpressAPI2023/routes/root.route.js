// imports
const express = require("express");

// setup router
const rootRouter = express.Router();

// routes
rootRouter.get("/new-page(.html)?", (req, res) => {
	res.render("new-page");
});

rootRouter.get("/old-page(.html)?", (req, res) => {
	res.status(301).render("new-page");
});

// exports
module.exports = { rootRouter };
