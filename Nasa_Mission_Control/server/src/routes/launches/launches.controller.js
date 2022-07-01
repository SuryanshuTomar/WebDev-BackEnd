// Imports
const { getAllLaunches } = require("../../models/launches.models");

function httpGetAllLaunches(req, res) {
	// Using launches.values() because launches is not an object but a Map
	return res.status(200).json(getAllLaunches());
}

module.exports = { httpGetAllLaunches };
