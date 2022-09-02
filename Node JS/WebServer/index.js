const http = require("http");
const { readFileSync } = require("fs");

// get all files
const homePage = readFileSync("./navbar/index.html");
const homePageLogo = readFileSync("./navbar/logo.svg");
const homePageLogic = readFileSync("./navbar/browser-app.js");
const homePageStyle = readFileSync("./navbar/styles.css");

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

	// styles
	else if (url === "/styles.css") {
		res.writeHead(200, { "Content-Type": "text/css" });
		res.write(homePageStyle);
	}

	// image/logo
	else if (url === "/logo.svg") {
		res.writeHead(200, { "Content-Type": "image/svg+xml" });
		res.write(homePageLogo);
	}

	// logic
	else if (url === "/browser-app.js") {
		res.writeHead(200, { "Content-Type": "text/javascript" });
		res.write(homePageLogic);
	}

	// About Page
	else if (url === "/about") {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.write("<h1>About Page</h1>");
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
