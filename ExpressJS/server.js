const express = require("express");

const friendsRouter = require("./routes/friends.routes");
const messagesRouter = require("./routes/messages.routes");

// We set up our application server using the express function that's exported from the express package.
const app = express();

// PORT
const PORT = 3500;

// Middlewares -
app.use((req, res, next) => {
	const start = Date.now();
	next();
	const delta = Date.now() - start;
	console.log(`${req.method} : ${req.baseUrl}${req.url}  ${delta}ms`);
});

// For Parsing JSON Body
app.use(express.json());

// Mouting Router middleware friendsRouter and messagesRouter to the express app
app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

// Listening to the application server
app.listen(PORT, "localhost", () => {
	console.log(`Listening on PORT : ${PORT}`);
});
