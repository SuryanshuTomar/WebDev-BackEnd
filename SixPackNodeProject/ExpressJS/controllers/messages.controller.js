const path = require("path");

function getMessages(req, res) {
	// sending file
	// res.sendFile(path.join(__dirname, "..", "public", "images", "photo.png"));

	// rendering messages hbs file
	res.render("messages", {
		title: "Message to my friend",
		friend: "Elon Musk",
	});
}

function postMessage(req, res) {
	console.log("Updating Messages...");
}

module.exports = { getMessages, postMessage };
