// Imports
const path = require("path");
const morgan = require("morgan");
const express = require("express");
const cors = require("cors");

// Router Imports
const planetsRouter = require("./routes/planets/planets.router");
const launchesRouter = require("./routes/launches/launches.router");

// Creating express server app
const app = express();

// JSON Parser Middleware
app.use(express.json());

// Middlerware for serving static files for React app
app.use(express.static(path.join(__dirname, "..", "public")));

// CORS Middleware
app.use(
	cors({
		origin: "http://localhost:3000",
	})
);

// Logging Middleware
app.use(morgan("combined"));

// Routers Middlewares
app.use(planetsRouter);
app.use(launchesRouter);

app.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

// Exports
module.exports = app;
