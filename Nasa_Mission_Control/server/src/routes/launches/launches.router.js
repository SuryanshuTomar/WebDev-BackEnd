// Imports
const express = require("express");

const {
	httpGetAllLaunches,
	httpAddNewLaunch,
} = require("./launches.controller");

// Setting planetsRouter Router
const launchesRouter = express.Router();

launchesRouter.get("/", httpGetAllLaunches);
launchesRouter.post("/", httpAddNewLaunch);

module.exports = launchesRouter;
