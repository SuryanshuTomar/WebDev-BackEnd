// Import
const http = require("http");
const app = require("./app");

const { loadPlanetsData } = require("./models/planets.model");

// Creating the server by passing the express server app as middleware
const server = http.createServer(app);

// PORT
const PORT = process.env.PORT || 3500;

async function startServer() {
	// Loading Planets data on startup
	await loadPlanetsData();

	// Listening to Server
	server.listen(PORT, "localhost", () => {
		console.log(`Listening on PORT ${PORT}...`);
	});
}

startServer();
