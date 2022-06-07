const path = require("path");

function getMessages(req, res) {
	// sending file
	res.sendFile(path.join(__dirname, "..", "public", "images", "photo.png"));
}

function postMessage(req, res) {
	console.log("Updating Messages...");
}

module.exports = { getMessages, postMessage };
