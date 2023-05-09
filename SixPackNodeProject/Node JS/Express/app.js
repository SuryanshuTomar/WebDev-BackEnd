const express = require("express");
const morgan = require("morgan");
const app = express();

const peopleRouter = require("./routes/people");
const loginRouter = require("./routes/auth");

// const { logger } = require("./logger");
// const { authorize } = require("./authorize");

// using our logger middleware
// app.use(logger);

// using multiple middlewares
// app.use([logger, authorize]);

// using third party logger middleware
app.use(morgan("tiny"));

// serving static files
app.use(express.static("./methods-public"));

// Form Parser
app.use(express.urlencoded({ extended: false }));

// JSON Parser
app.use(express.json());

app.use("/api/people", peopleRouter);
app.use("/login", loginRouter);

app.get("/", (req, res) => {
	res.send("Home");
});

app.get("/about", (req, res) => {
	res.send("About");
});

app.get("/products", (req, res) => {
	res.status(200).json({
		success: true,
		data: req.user,
	});
});

// => Listening to port
const PORT = 3500;
const URL = "localhost";
app.listen(PORT, URL, () => {
	console.log("Listening on PORT : ", PORT);
});
