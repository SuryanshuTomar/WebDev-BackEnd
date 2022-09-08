// => In express, we create the server app as following:
// Method 1:
// Step 1. import the express package which will return the express() method.
// Step2. Call the express() method which will inturn return the server app.
// const express = require("express");
// const app = express();

// Method 2: We will directly call the express() method at the time of importing.
// const app = require("express")();

// => Below are some methods that we get out of the express server app.
// app.get()
// app.post()
// app.put()
// app.delete()
// app.all()
// app.use()
// app.listen()

// => Setup static middleware -
// Using app.use() middle and static method from express to server the public folder which contains all static files of our server app. (Static files are the files which we dont need to be change by our server app)
// app.use(express.static("./public"));

// => For sending file as a response from the server -
// app.get("/", (req, res) => {
// 	res.status(200).sendFile(path.resolve(__dirname, "./navbar/index.html"));
// Note: No Need to even setup this resource path if we just put our index.html file as well in the public folder in which we are serving all the static files using the express.static() method.
// });

// => Better method of sending files from the server -
// 1. Adding to Static Assets. (Line - 22)
// 2. Server Side Rendering using Template Engines

// -> So, we can server the data from the server to the client using one of the two methods mentioned below -
//    1. Serving the APIs using JSON(Javascript Object Notation)(API)
//    2. Serving the whole pages using Template Engines()(SSR)

// => For handling all other routes that are not defined by our server application
// app.all("*", (req, res) => {
// 	res.status(404).send("<h1>404 | Page Not Found !!</h1>");
// });

// => Form Parser Middleware -
// app.use(express.urlencoded({ extended: false }));

// => JSON Parser Middleware - 
// app.use(express.json());

// => Listening to the server
// const PORT = 3500;
// const URL = "localhost";
// app.listen(PORT, URL, () => {
// 	console.log("Listening on PORT : ", PORT);
// });

// => Middlewares -
// - using our logger middleware
// app.use(logger);
// - using multiple middlewares
// app.use([logger, authorize]);
// - Option from to use middlewares from -
//    1. Our own middlewares
//    2. Expres middlewares
//    3. Third party middlewares

// => There are two types of API parameters :
// 1. Router Parameters -
// Using Route Parameter
// here /:prodId is placeholder
// const { products } = require("./data/data");
// app.get("/api/products/:prodId", (req, res) => {
// 	const productId = +req.params.prodId;
// 	const singleProd = products.find((prod) => prod.id === productId);
// 	if (!singleProd) {
// 		return res.status(404).json({
// 			message: "Product does not exists",
// 		});
// 	}
// 	res.status(200).json(singleProd);
// });

// 2. Query String parameters or URL parameters -
// Using Query String Parameter
// app.get("/api/v1/query", (req, res) => {
// 	const { search, limit } = req.query;
// 	let sortedProducts = [...products];

// 	if (search) {
// 		sortedProducts = sortedProducts.filter((prod) =>
// 			prod.name.startsWith(search)
// 		);
// 	}
// 	if (limit) {
// 		sortedProducts = sortedProducts.slice(0, Number(limit));
// 	}

// 	if (sortedProducts.length === 0) {
// 		res.status(200).json({
// 			success: true,
// 			message: "No Products matched your search query",
// 			data: [],
// 		});
// 	} else {
// 		res.status(200).json(sortedProducts);
// 	}
// });

// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------
// Example - 1

// const express = require("express");
// const path = require("path");
// const app = express();

// // Setup static middleware
// app.use(express.static("./public"));

// // app.get("/", (req, res) => {
// // 	res.status(200).sendFile(path.resolve(__dirname, "./navbar/index.html"));
// // });

// app.get("/about", (req, res) => {
// 	res.status(200).send("<h1>About Page</h1>");
// });

// // for handling all other routes that are not defined by our server application
// app.all("*", (req, res) => {
// 	res.status(404).send("<h1>404 | Resource Not Found !!</h1>");
// });

// // => Listening to port
// const PORT = 3500;
// const URL = "localhost";
// app.listen(PORT, URL, () => {
// 	console.log("Listening on PORT : ", PORT);
// });

// ----------------------------------------------------------------------------------------------------
// Example - 2

// const express = require("express");
// const app = express();

// const { products } = require("./data/data");

// // Setup static middleware
// // app.use(express.static("./public"));

// app.get("/", (req, res) => {
// 	res.status(200).send(
// 		"<h1>Home Page</h1> <br/><a href='/api/products'>Products</a>"
// 	);
// });

// app.get("/api/products", (req, res) => {
// 	const newProducts = products.map((prod) => {
// 		const { id, name, image } = prod;
// 		return { id, name, image };
// 	});
// 	res.status(200).json(newProducts);
// });

// // Using Route Parameter
// // here /:prodId is placeholder
// app.get("/api/products/:prodId", (req, res) => {
// 	const productId = +req.params.prodId;
// 	const singleProd = products.find((prod) => prod.id === productId);
// 	if (!singleProd) {
// 		return res.status(404).json({
// 			status: false,
// 			message: "Product does not exists",
// 		});
// 	}

// 	res.status(200).json(singleProd);
// });

// // Using Query String Parameter
// app.get("/api/v1/query", (req, res) => {
// 	const { search, limit } = req.query;
// 	let sortedProducts = [...products];

// 	if (search) {
// 		sortedProducts = sortedProducts.filter((prod) =>
// 			prod.name.startsWith(search)
// 		);
// 	}
// 	if (limit) {
// 		sortedProducts = sortedProducts.slice(0, Number(limit));
// 	}

// 	if (sortedProducts.length === 0) {
// 		res.status(200).json({
// 			success: true,
// 			message: "No Products matched your search query",
// 			data: [],
// 		});
// 	} else {
// 		res.status(200).json(sortedProducts);
// 	}
// });

// app.get("/about", (req, res) => {
// 	res.status(200).send("<h1>About Page</h1>");
// });

// // for handling all other routes that are not defined by our server application
// app.all("*", (req, res) => {
// 	res.status(404).send("<h1>404 | Resource Not Found !!</h1>");
// });

// // => Listening to port
// const PORT = 3500;
// const URL = "localhost";
// app.listen(PORT, URL, () => {
// 	console.log("Listening on PORT : ", PORT);
// });

// ----------------------------------------------------------------------------------------------------
// Example - 3
// const express = require("express");
// const app = express();

// const { logger } = require("./logger");
// const { authorize } = require("./authorize");

// // using our logger middleware
// // app.use(logger);

// // using multiple middlewares
// app.use([logger, authorize]);

// app.get("/", (req, res) => {
// 	res.send("Home");
// });

// app.get("/about", (req, res) => {
// 	res.send("About");
// });

// app.get("/products", (req, res) => {
// 	res.status(200).json({
// 		success: true,
// 		data: req.user,
// 	});
// });

// // => Listening to port
// const PORT = 3500;
// const URL = "localhost";
// app.listen(PORT, URL, () => {
// 	console.log("Listening on PORT : ", PORT);
// });
