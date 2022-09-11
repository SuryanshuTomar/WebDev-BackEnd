// Imports -
const express = require("express");
const morgan = require("morgan");
const connectDB = require("./db/connect");

const tasksRouter = require("./routes/tasks.routes");

// Express app -
const app = express();

// configuring Environment variables
require("dotenv").config();

// Middlewares -
// Serving the front-end static files
app.use(express.static("./public"));

// body parser
app.use(express.json());
// logger
app.use(morgan("tiny"));

// Routes -
app.use("/api/v1/tasks", tasksRouter);

app.get("/", (req, res) => {
	res.status(200).send("Task Manager APP");
});

const startServer = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		// Listerning to server -
		const PORT = 3500;
		const HOST = "localhost";
		app.listen(PORT, HOST, () => {
			console.log(`Listening on Port : ${PORT}`);
		});
	} catch (error) {
		console.log(error);
	}
};

startServer();
