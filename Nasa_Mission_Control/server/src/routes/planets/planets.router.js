// Imports
const express = require("express");

// Setting planetsRouter Router
const planetsRouter = express.Router();

// Routes
planetsRouter.get("/planets", getAllPlanets);

module.exports = planetsRouter;