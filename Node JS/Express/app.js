const express = require("express");
const app = express();

const { products } = require("./data/data");

// Setup static middleware
// app.use(express.static("./public"));

app.get("/", (req, res) => {
	res.status(200).send(
		"<h1>Home Page</h1> <br/><a href='/api/products'>Products</a>"
	);
});

app.get("/api/products", (req, res) => {
	const newProducts = products.map((prod) => {
		const { id, name, image } = prod;
		return { id, name, image };
	});
	res.status(200).json(newProducts);
});

// Using Route Parameter
// here /:prodId is placeholder
app.get("/api/products/:prodId", (req, res) => {
	const productId = +req.params.prodId;
	const singleProd = products.find((prod) => prod.id === productId);
	if (!singleProd) {
		return res.status(404).json({
			status: false,
			message: "Product does not exists",
		});
	}

	res.status(200).json(singleProd);
});

// Using Query String Parameter
app.get("/api/v1/query", (req, res) => {
	const { search, limit } = req.query;
	let sortedProducts = [...products];

	if (search) {
		sortedProducts = sortedProducts.filter((prod) =>
			prod.name.startsWith(search)
		);
	}
	if (limit) {
		sortedProducts = sortedProducts.slice(0, Number(limit));
	}

	if (sortedProducts.length === 0) {
		res.status(200).json({
			success: true,
			message: "No Products matched your search query",
			data: [],
		});
	} else {
		res.status(200).json(sortedProducts);
	}
});

app.get("/about", (req, res) => {
	res.status(200).send("<h1>About Page</h1>");
});

// for handling all other routes that are not defined by our server application
app.all("*", (req, res) => {
	res.status(404).send("<h1>404 | Resource Not Found !!</h1>");
});

// => Listening to port
const PORT = 3500;
const URL = "localhost";
app.listen(PORT, URL, () => {
	console.log("Listening on PORT : ", PORT);
});
