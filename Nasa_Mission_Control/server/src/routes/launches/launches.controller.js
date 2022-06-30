// Imports
const { launches } = require("../../models/launches.models");

function getAllLaunches(req, res) {
	// Using launches.values() because launches is not an object but a Map
	return res.status(200).json(Array.from(launches.values()));
}

module.exports = { getAllLaunches };
