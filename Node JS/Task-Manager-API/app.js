// Imports -
const express = require("express");
const morgan = require("morgan");
const connectDB = require("./db/connect");

const tasksRouter = require("./routes/tasks.routes");
const notFound = require("./middlewares/not-found");
const errorHandlerMiddleware = require("./middlewares/error-handler");

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

// Routes
app.use("/api/v1/tasks", tasksRouter);

// Not Found route handler middleware
app.use(notFound);

// Error Handler middleware
app.use(errorHandlerMiddleware);

// Start Server only when we are connected to the DB -
const startServer = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		// Listerning to server -
		const PORT = process.env.PORT || 3000;
		const HOST = "localhost";
		app.listen(PORT, HOST, () => {
			console.log(`Listening on Port : ${PORT}`);
		});
	} catch (error) {
		console.log(error);
	}
};

startServer();
