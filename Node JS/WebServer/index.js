const http = require("http");
const { readFileSync } = require("fs");

// get all files
const homePage = readFileSync("./index.html");

const server = http.createServer((req, res) => {
	const url = req.url;
	const method = req.method;
	console.log("User hit the server!!");
	console.log("Request Method : ", method);
	console.log("Request URL : ", url);

	// Home Page
	if (url === "/" || url === "/home") {
		res.writeHead(200, { "Content-Type": "text/html" });
		// serving the html files instead of writing the html page here.
		res.write(homePage);
	}
	// About Page
	else if (url === "/about") {
	}
	// All other pages
	else {
		res.writeHead(404, { "Content-Type": "text/html" });
		res.write("<h1>Page not found !</h1>");
	}

	// closing the server
	res.end();
});

const PORT = 3500;
server.listen(PORT, "localhost", () => {
	console.log("Server Listening on Port : ", PORT);
});
