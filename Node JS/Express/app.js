const express = require("express");
const path = require("path");
const app = express();

// Setup static middleware
app.use(express.static("./public"));

// app.get("/", (req, res) => {
// 	res.status(200).sendFile(path.resolve(__dirname, "./navbar/index.html"));
// });

app.get("/about", (req, res) => {
	res.status(200).send("<h1>About Page</h1>");
});

// for handling all other routes that are not defined by our server application
app.all("*", (req, res) => {
	res.status(404).send("<h1>404 | Resource Not Found !!</h1>");
});

// => Listening to port
const PORT = 3500;
const URL = "localhost";
app.listen(PORT, URL, () => {
	console.log("Listening on PORT : ", PORT);
});
