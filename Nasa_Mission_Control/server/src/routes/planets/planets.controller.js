const planets = [];

function getAllPlanets(req, res) {
   // Using a return statement so that we dont set the response and set status twice.
	return res.status(200).json(planets);
}
