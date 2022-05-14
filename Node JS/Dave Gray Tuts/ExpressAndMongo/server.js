const express = require("express");
const app = express();
const path = require("path");

const { logger } = require("./middleware/logEvents");

const PORT = process.env.PORT || 3500;
const LOCALHOST = "localhost";

// Custom Middleware logger
app.use(logger);

// Built-In Middleware to handle urlencoded data
// In other words, form data: "content-type: application/x-www-form-urlencoded"
// To use middlewares on some or all routes of our application we use .use() method.
app.use(express.urlencoded({ extended: false }));

// Built-In Middleware for json post data
app.use(express.json());

// Built-In Middleware to serve static files
app.use(express.static(path.join(__dirname, "public")));

app.get("^/$|index(.html)?", (req, res) => {
	// sending text response
	// res.send("Hello World!!");

	// one way to send a static file as response
	res.sendFile("./views/index.html", { root: __dirname });

	// Another way to send a static file (Recommended)
	res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/new-page(.html)?", (req, res) => {
	res.sendFile(path.join(__dirname, "views", "new-page.html"));
});

app.get("/old-page(.html)?", (req, res) => {
	res.redirect(301, "/new-page.html"); // 302 by default
});

// Route Handlers
app.get(
	"/hello(.html)?",
	(req, res, next) => {
		console.log("Attempted to load hello.html");
		next();
	},
	(req, res) => {
		res.send("Hello World !");
	}
);

// Chaining Route Handlers
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
	res.send("Finished");
};

// Passing the array of Chained Route Handlers
app.get("/chain(.html)?", [one, two, three]);

app.get("/*", (req, res) => {
	res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(PORT, () => {
	console.log(`Server running at ${LOCALHOST}:${PORT}`);
});
