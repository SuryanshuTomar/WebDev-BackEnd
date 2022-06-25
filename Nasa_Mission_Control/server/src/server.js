// Import
const http = require("http");
const app = require("./app");

// Creating the server by passing the express server app as middleware
const server = http.createServer(app);

// PORT
const PORT = process.env.PORT || 3500;

// Listening to Server
server.listen(PORT, "localhost", () => {
	console.log(`Listening on PORT ${PORT}...`);
});
