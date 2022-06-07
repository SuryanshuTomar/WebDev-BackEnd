function getMessages(req, res) {
	res.send("<h1>Hello My Friend!!</h1>");
}

function postMessage(req, res) {
	console.log("Updating Messages...");
}

module.exports = { getMessages, postMessage };
