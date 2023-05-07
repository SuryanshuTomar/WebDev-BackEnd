// -------------------------------------------------------------------------------------
// Imports
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config({ path: "./config.env" });

const { logger } = require("./middlewares/logEvents");
const { subdirRouter } = require("./routes/subdir.route");
const { rootRouter } = require("./routes/root.route");
const errorHandler = require("./middlewares/errorHandler");

// -------------------------------------------------------------------------------------
// App Setup
const path = require("path");
const app = express();

// -------------------------------------------------------------------------------------
// Serving static files from server
// app.use(express.static(path.join(path.resolve(), "css")));
// app.use(express.static(path.join(__dirname, "img")));

// use public folder for both views and subdir in views
// app.use("/", express.static(path.join(path.resolve(), "public")));
// or
app.use(express.static(path.join(path.resolve(), "public")));
app.use("/subdir", express.static(path.join(path.resolve(), "public")));

// Setting view engine
app.set("view engine", "ejs");

// -------------------------------------------------------------------------------------
// Custom Middleware - Logger
app.use(logger);

// -------------------------------------------------------------------------------------
// App middlewares
const whitelist = ["http://localhost:8000", "http://127.0.0.1:8000"];
const corsOptions = {
	origin: (origin, cbFn) => {
		// if the origin is localhost then it will be undefined in that case and
		// if the origin which requested the server is present in the whitelist then OK.
		if (!origin ?? whitelist.includes(origin)) {
			cbFn(null, true);
		}
		// else throw a new error
		else {
			cbFn(new Error("Not allowed by CORS"));
		}
	},
	optionsSuccessStatus: 200,
	method: ["GET", "POST", "PUT", "DELETE"],
	credentials: true,
};

app.use(cors(corsOptions));
app.use(morgan("tiny"));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// -------------------------------------------------------------------------------------
// Route Handler
app.get("/$|index(.html)?", (req, res) => {
	res.render("index", { name: "Alex" });
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
	res.send("Recieved Chain!");
};

app.get("/chain(.html)?", [one, two, three]);

// -------------------------------------------------------------------------------------
// API Route middlewares
app.use("/", rootRouter);
app.use("/subdir", subdirRouter);

// -------------------------------------------------------------------------------------
// API Route Not-Found handler
// app.all(), accepts all http methods and regex for path as well.
app.all("*", (req, res) => {
	res.status(404).render("404");
});

// -------------------------------------------------------------------------------------
// Custom Middleware - Error Handler
app.use(errorHandler);

// -------------------------------------------------------------------------------------
// Start Server
const PORT = process.env.PORT || 3500;
const HOST = process.env.HOST || "localhost";
app.listen(PORT, HOST, () => {
	console.log(`Server listening on ${PORT}...`);
});
