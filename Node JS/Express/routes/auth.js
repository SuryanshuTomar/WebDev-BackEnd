const express = require("express");
const router = express.Router();

// Handling post request for the form that is in method-public folder
router.post("/", (req, res) => {
	console.log(req.body);
	const { name } = req.body;
	if (name === "Death") {
		res.status(200).send(`Welcome ${name} !`);
	} else {
		res.status(401).send("Authorization Failed !!");
	}
});

module.exports = router;
