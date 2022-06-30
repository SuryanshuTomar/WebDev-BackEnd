// Imports
const express = require("express");

const { getAllLaunches } = require("./launches.controller");

// Setting planetsRouter Router
const launchesRouter = express.Router();

launchesRouter.get("/launches", getAllLaunches);

module.exports = launchesRouter;
