// Imports
const express = require("express");

const planetsRouter = require("./routes/planets/planets.router");

// Creating express server app
const app = express();

// JSON Parser Middleware
app.use(express.json());

// Routers Middlewares
app.use(planetsRouter);

// Exports
module.exports = app;