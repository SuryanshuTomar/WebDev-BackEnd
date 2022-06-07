const express = require("express");
const {
	getMessages,
	postMessage,
} = require("./controllers/messages.controller");
const {
	getFriends,
	getOneFriend,
	postFriend,
} = require("./controllers/friends.controller");

// We set up our application server using the express function that's exported from the express package.
const app = express();

// PORT
const PORT = 3500;

// Middlewares -
app.use((req, res, next) => {
	const start = Date.now();
	next();
	const delta = Date.now() - start;
	console.log(`${req.method} : ${req.url}  ${delta}ms`);
});

// For Parsing JSON Body
app.use(express.json());

// Routes -
// app.get(pathEndpoint, HandlerFunction(request, response))
// Friends Routes
app.get("/friends", getFriends);
// Nested Route
app.get("/friends/:id", getOneFriend);
app.post("/friends", postFriend);

// Messages Routes
app.get("/messages", getMessages);
app.post("/messages", postMessage);

// Listening to the application server
app.listen(PORT, "localhost", () => {
	console.log(`Listening on PORT : ${PORT}`);
});
