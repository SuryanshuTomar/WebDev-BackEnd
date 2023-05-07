// Imports
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });

// App Setup
const path = require("path");
const app = express();

// Serving static files from server
app.use(express.static(path.join()));

// App middlewares
app.use(
	cors({
		origin: ["https://localhost:5173"],
		method: ["GET", "POST", "PUT", "DELETE"],
		credentials: true,
	})
);
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes

// API Route middlewares

// Start Server
const PORT = process.env.PORT || 3500;
const HOST = process.env.HOST || "localhost";
app.listen(PORT, HOST, () => {
	console.log(`Server listening on ${PORT}...`);
});