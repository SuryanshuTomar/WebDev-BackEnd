const express = require("express");
const router = express.Router();
const path = require("path");

router.get("^/$|index(.html)?", (req, res) => {
	// sending text response
	// res.send("Hello World!!");

	// one way to send a static file as response
	// res.sendFile("./views/index.html", { root: __dirname });

	// Another way to send a static file (Recommended)
	res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

router.get("/new-page(.html)?", (req, res) => {
	res.sendFile(path.join(__dirname, "..", "views", "new-page.html"));
});

router.get("/old-page(.html)?", (req, res) => {
	res.redirect(301, "/new-page.html"); // 302 by default
});

module.exports = router;
