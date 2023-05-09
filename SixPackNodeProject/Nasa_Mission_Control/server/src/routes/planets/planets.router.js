// Imports
const express = require("express");

// Controller Imports
const { httpGetAllPlanets } = require("./planets.controller");

// Setting planetsRouter Router
const planetsRouter = express.Router();

// Routes
planetsRouter.get("/", httpGetAllPlanets);

module.exports = planetsRouter;
