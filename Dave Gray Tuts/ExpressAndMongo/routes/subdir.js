const express = require("express");
const router = express.Router();
const path = require("path");

router.get("^/$|index(.html)?", (req, res) => {
	// sending text response
	// res.send("Hello World!!");

	// one way to send a static file as response
	// res.sendFile("./views/index.html", { root: __dirname });

	// Another way to send a static file (Recommended)
	res.sendFile(path.join(__dirname, "..", "views", "subdir", "index.html"));
});

router.get("^/$|test(.html)?", (req, res) => {
	res.sendFile(path.join(__dirname, "..", "views", "subdir", "test.html"));
});

module.exports = router;
