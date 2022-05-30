const http = require("http");

const server = http.createServer((req, res) => {
	res.write("Request Recieved");
	res.end();
});

const PORT = 3500;
const HOST = "localhost";
server.listen(PORT, HOST, () => {
	console.log("Listening on port : ", PORT);
});
