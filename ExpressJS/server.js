const express = require("express");

// We set up our application server using the express function that's exported from the express package.
const app = express();

// PORT
const PORT = 3500;

// Data
const friends = [
	{
		id: 0,
		name: "Satyendra Nath Bose",
	},
	{
		id: 1,
		name: "Iron Man",
	},
];

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
app.get("/friends", (req, res) => {
	res.json(friends);
});

// Nested Route
app.get("/friends/:id", (req, res) => {
	const friendsId = Number(req.params.id);
	const friend = friends[friendsId];
	if (friend) res.status(200).json(friend);
	else
		res.status(404).json({
			error: "No Friends Found",
		});
});

app.get("/messages", (req, res) => {
	res.send("<h1>Hello My Friend!!</h1>");
});

app.post("/friends", (req, res) => {
	if (!req.body.name) {
		return res.status(400).json({
			error: "Missing friend name",
		});
	}

	const newFriend = {
		id: friends.length,
		name: req.body.name,
	};
	friends.push(newFriend);
	res.json(newFriend);
});

app.post("/messages", (req, res) => {
	console.log("Updating Messages...");
});

// Listening to the application server
app.listen(PORT, "localhost", () => {
	console.log(`Listening on PORT : ${PORT}`);
});
