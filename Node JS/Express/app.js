const express = require("express");
const app = express();

const { logger } = require("./logger");
const { authorize } = require("./authorize");

// using our logger middleware
// app.use(logger);

// using multiple middlewares
app.use([logger, authorize]);

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
