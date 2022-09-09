// Imports -
const express = require("express");
const morgan = require("morgan");

const { tasksRouter } = require("./routes/tasks.routes");

// Express app -
const app = express();

// Middlewares -
// body parser
app.use(express.json());
// logger
app.use(morgan("tiny"));

// Routes -
app.use("/api/v1/tasks", tasksRouter);

app.get("/", (req, res) => {
	res.status(200).send("Task Manager APP");
});

// Listerning to server -
const PORT = 3500;
const HOST = "localhost";
app.listen(PORT, HOST, () => {
	console.log(`Listening on Port : ${PORT}`);
});
