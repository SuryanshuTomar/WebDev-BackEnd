// Imports
const { planets } = require("../../models/planets.model");

// Router Handlers / Controller Functions
function getAllPlanets(req, res) {
	// Using a return status statement so that we dont set the response and set status twice.
	return res.status(200).json(planets);
}

module.exports = {
	getAllPlanets,
};
