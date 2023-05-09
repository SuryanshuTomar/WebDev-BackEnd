const express = require("express");
const path = require("path");

const friendsRouter = require("./routes/friends.routes");
const messagesRouter = require("./routes/messages.routes");

// We set up our application server using the express function that's exported from the express package.
const app = express();

// Setting View Engine
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

// PORT
const PORT = 3500;

// Middlewares -
app.use((req, res, next) => {
	const start = Date.now();
	next();
	const delta = Date.now() - start;
	console.log(`${req.method} : ${req.baseUrl}${req.url}  ${delta}ms`);
});

// Serving Static Files in ExpressJS
app.use("/site", express.static(path.join(__dirname, "public")));

// For Parsing JSON Body
app.use(express.json());

app.get("/", (req, res) => {
	res.render("index", {
		title: "My Friends",
		caption: "Life is a box full of chocolates...",
	});
});

// Mouting Router middleware friendsRouter and messagesRouter to the express app
app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

// Listening to the application server
app.listen(PORT, "localhost", () => {
	console.log(`Listening on PORT : ${PORT}`);
});
