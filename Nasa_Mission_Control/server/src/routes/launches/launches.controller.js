// Imports
const {
	getAllLaunches,
	addNewLaunch,
} = require("../../models/launches.models");

function httpGetAllLaunches(req, res) {
	// Using launches.values() because launches is not an object but a Map
	return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req, res) {
	const launch = req.body;
	launch.launchDate = new Date(launch.launchDate);

	addNewLaunch(launch);
	res.status(201).json(launch);
}

module.exports = { httpGetAllLaunches, httpAddNewLaunch };
