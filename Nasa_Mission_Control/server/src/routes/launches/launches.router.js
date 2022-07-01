// Imports
const express = require("express");

const { httpGetAllLaunches } = require("./launches.controller");

// Setting planetsRouter Router
const launchesRouter = express.Router();

launchesRouter.get("/launches", httpGetAllLaunches);

module.exports = launchesRouter;
