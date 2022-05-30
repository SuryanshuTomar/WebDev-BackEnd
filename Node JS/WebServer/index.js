const http = require("http");

const server = http.createServer((req, res) => {
	// Responding with Plain text
	// res.writeHead(200, {
	// 	"Content-Type": "text/plain",
	// });
	// res.write("Request Completed");

	// Responding with JSON
	// res.writeHead(200, {
	// 	"Content-Type": "application/json",
	// });
	// res.write(
	// 	JSON.stringify({
	// 		status: "OK",
	// 		message: "Request Completed",
	// 	})
	// );

	if (req.url === "/friends") {
		res.writeHead(200, {
			"Content-Type": "application/json",
		});
		res.write(
			JSON.stringify({
				friends: [
					{
						id: 1,
						name: "Sir Issac Newton",
					},
					{
						id: 2,
						name: "Nikola Tesla",
					},
				],
			})
		);
	} else if (req.url === "/messages") {
		res.write(
			"<html><body><h3>Hello</h3><h3>What are yours thougts on astronomy</h3></body></html>"
		);
	} else {
		res.writeHead(404, {
			"Content-Type": "application/json",
		});
		res.write(
			JSON.stringify({
				status: "Not Found",
				message: "Something went wrong",
			})
		);
	}

	res.end();
});

const PORT = 3500;
const HOST = "localhost";
server.listen(PORT, HOST, () => {
	console.log("Listening on port : ", PORT);
});
