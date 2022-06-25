// Imports
const express = require("express");
const cors = require("cors");

// Router Imports
const planetsRouter = require("./routes/planets/planets.router");

// Creating express server app
const app = express();

// JSON Parser Middleware
app.use(express.json());

// CORS Middleware
app.use(
	cors({
		origin: "http://localhost:3000",
	})
);

// Routers Middlewares
app.use(planetsRouter);

// Exports
module.exports = app;
