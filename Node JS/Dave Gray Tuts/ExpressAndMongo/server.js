const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

// Middlewares import
const { logger } = require("./middleware/logEvents");
const errorHandler = require("./middleware/errorHandler");

const PORT = process.env.PORT || 3500;
const LOCALHOST = "localhost";

// Custom Middleware logger
app.use(logger);

// Third-Party Middleware cors(Cross Origin Resource Sharing)
// Whitelist links will not be prevented by cors
const whitelist = [
	"https://www.yoursite.com",
	"http://127.0.0.1:5500",
	"http://localhost:3500",
];
const corsOptions = {
	origin: (origin, callback) => {
		// If origin is present in the whitelist item then, we will pass null and true in callback which means origin which has requested the callback will passed and returned otherwise not.
		if (whitelist.indexOf(origin) !== -1 || !origin) {
			callback(null, true);
		} else {
			callback(new Error("Not Allowed by CORS"));
		}
	},
	optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Built-In Middleware to handle urlencoded data
// In other words, form data: "content-type: application/x-www-form-urlencoded"
// To use middlewares on some or all routes of our application we use .use() method.
app.use(express.urlencoded({ extended: false }));

// Built-In Middleware for json post data
app.use(express.json());

// Built-In Middleware to serve static files
app.use(express.static(path.join(__dirname, "public")));
app.use("/subdir", express.static(path.join(__dirname, "public")));

// Routes
app.use("/", require("./routes/root"));
app.use("/subdir", require("./routes/subdir"));

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

// 404 Handler -
// app.get("/*", (req, res) => {
// 	res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
// });

// Using app.all() for 404 Handler -
// express .all() method is for all http methods
app.all("*", (req, res) => {
	res.status(404);
	if (req.accepts("html")) {
		res.sendFile(path.join(__dirname, "views", "404.html"));
	} else if (req.accepts("json")) {
		res.json({
			error: "404 Not Found",
		});
	} else {
		res.type("txt").send("404 Not Found");
	}
});

// Error Handler
app.use(errorHandler);

app.listen(PORT, () => {
	console.log(`Server running at ${LOCALHOST}:${PORT}`);
});
