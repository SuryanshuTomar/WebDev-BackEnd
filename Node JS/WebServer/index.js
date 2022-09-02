const http = require("http");

const server = http.createServer((req, res) => {
	// Responding with Plain text
	// res.writeHead(200, {
	// 	"Content-Type": "text/plain"
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

	const friends = [
		{
			id: 0,
			name: "Satyendra Nath Bose",
		},
		{
			id: 1,
			name: "Sir Issac Newton",
		},
		{
			id: 2,
			name: "Nikola Tesla",
		},
	];

	const params = req.url.split("/");
	console.log(params);
	// /friends/2 => ["", "friends", "2"]

	if (req.method === "POST" && params[1] === "friends") {
		req.on("data", (data) => {
			const friend = data.toString();
			console.log("Request: ", friend);
			friends.push(JSON.parse(friend));
			// Echoeing data back from request readable stream to response writable stream
		});
		req.pipe(res);
	} else if (req.method === "GET" && params[1] === "friends") {
		// res.statusCode = 200;
		// res.setHeader("Content-Type", "application/json");
		res.writeHead(200, {
			"Content-Type": "application/json",
		});
		if (Number(params[2]) >= friends.length) {
			res.writeHead(404, {
				"Content-Type": "application/json",
			});
			res.write(JSON.stringify({ status: 404, message: "No Friend found" }));
			res.end();
		} else if (params.length === 3) {
			const friendIndex = Number(params[2]);
			res.write(JSON.stringify(friends[friendIndex]));
			res.end();
		} else {
			res.write(JSON.stringify(friends));
			res.end();
		}
	} else if (req.method === "GET" && params[1] === "messages") {
		res.write(
			"<html><body><h3>Hello</h3><h3>What are yours thougts on astronomy</h3></body></html>"
		);
		res.end();
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
		res.end();
	}
});

const PORT = 3500;
const HOST = "localhost";
server.listen(PORT, HOST, () => {
	console.log("Listening on port : ", PORT);
});
