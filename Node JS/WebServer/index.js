const http = require("http");

const server = http.createServer((req, res) => {
	const url = req.url;
	const method = req.method;
	console.log("User hit the server!!");
	console.log("Request Method : ", req.method);
	console.log("Request URL : ", req.url);

	// Home Page
	if (url === "/" || url === "/home") {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.write("<h1>Home Page</h1>");
	}
	// About Page
	else if (url === "/about") {
	}
	// All other pages
	else {
		res.writeHead(404, { "Content-Type": "text/html" });
		res.write("<h1>Page not found !</h1>");
	}

	res.end();
});

const PORT = 3500;
server.listen(PORT, "localhost", () => {
	console.log("Server Listening on Port : ", PORT);
});
