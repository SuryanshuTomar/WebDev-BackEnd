// Imports
const express = require("express");

// Controller Imports
const { getAllPlanets } = require("./routes/planets/planets.controller");

// Setting planetsRouter Router
const planetsRouter = express.Router();

// Routes
planetsRouter.get("/planets", getAllPlanets);

module.exports = planetsRouter;
