// Imports
const { getAllPlanets } = require("../../models/planets.model");

// Router Handlers / Controller Functions
function httpGetAllPlanets(req, res) {
	// Using a return status statement so that we dont set the response and set status twice.
	return res.status(200).json(getAllPlanets());
}

module.exports = {
	httpGetAllPlanets,
};
