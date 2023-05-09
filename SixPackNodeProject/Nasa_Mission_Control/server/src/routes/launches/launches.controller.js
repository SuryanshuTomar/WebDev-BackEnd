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

	if (
		!launch.mission ||
		!launch.rocket ||
		!launch.launchDate ||
		!launch.target
	) {
		return res.status(400).json({
			error: "Missing Required launch property",
		});
	}

	launch.launchDate = new Date(launch.launchDate);
	if (isNaN(launch.launchDate)) {
		return res.status(400).json({
			error: "Invalid launchDate",
		});
	}

	addNewLaunch(launch);
	res.status(201).json(launch);
}

module.exports = { httpGetAllLaunches, httpAddNewLaunch };
