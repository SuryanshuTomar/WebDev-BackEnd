// -------------------------------------------------------------------------------------
// Imports
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config({ path: "./config.env" });

// -------------------------------------------------------------------------------------
// App Setup
const path = require("path");
const app = express();

// -------------------------------------------------------------------------------------
// Serving static files from server
// app.use(express.static(path.join(path.resolve(), "css")));
// app.use(express.static(path.join(__dirname, "img")));
app.use(express.static(path.join(path.resolve(), "public")));

// Setting view engine
app.set("view engine", "ejs");

// -------------------------------------------------------------------------------------
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
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// -------------------------------------------------------------------------------------
// Route Handlers
app.get("/$|index(.html)?", (req, res) => {
	res.render("index", { name: "Alex" });
});

app.get("/new-page(.html)?", (req, res) => {
	res.render("new-page");
});

app.get("/*", (req, res) => {
	res.status(404).render("404");
});

// -------------------------------------------------------------------------------------
// Router Handlers Chain
const one = (req, res, next) => {
	console.log("one");
	next();
};

const two = (req, res, next) => {
	console.log("two");
	next();
};

const three = (req, res, next) => {
	console.log("three");
	next();
};

app.get("/chain(.html)?", [one, two, three]);

// -------------------------------------------------------------------------------------
// API Route middlewares

// -------------------------------------------------------------------------------------
// Start Server
const PORT = process.env.PORT || 3500;
const HOST = process.env.HOST || "localhost";
app.listen(PORT, HOST, () => {
	console.log(`Server listening on ${PORT}...`);
});
