const express = require("express");
const morgan = require("morgan");
const app = express();

const { people } = require("./data/data");
const { logger } = require("./logger");
const { authorize } = require("./authorize");

// using our logger middleware
// app.use(logger);

// using multiple middlewares
// app.use([logger, authorize]);

// using third party logger middleware
app.use(morgan("tiny"));

// serving static files
app.use(express.static("./methods-public"));

// Form Parser
app.use(express.urlencoded({ extended: false }));

// JSON Parser
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Home");
});

app.get("/about", (req, res) => {
	res.send("About");
});

app.get("/api/people", (req, res) => {
	res.status(200).json({
		success: true,
		data: people,
	});
});

app.post("/api/people", (req, res) => {
	console.log(req.body);
	const { name } = req.body;
	if (name) {
		res.status(201).json({
			success: true,
			person: name,
		});
	} else {
		res.status(400).json({
			success: false,
			msg: "Name Field can not be empty !",
		});
	}
});

app.put("/api/people/:id", (req, res) => {
	const { name } = req.body;
	let { id } = req.params;
	id = +id;

	if (people.length - 1 < id) {
		return res.status(400).json({
			success: false,
			msg: `ID:${id} does not exists`,
		});
	}

	if (!name) {
		return res.status(400).json({
			success: false,
			msg: "'name' property not found !",
		});
	}

	const newPeople = people.map((person) => {
		if (person.id === id) {
			return { id: id, name: name };
		} else {
			return person;
		}
	});
	res.status(200).json({
		success: true,
		person: newPeople,
	});
});

app.delete("/api/people/:id", (req, res) => {
	const { name } = req.body;
	let { id } = req.params;
	id = +id;

	if (people.length < id) {
		return res.status(400).json({
			success: false,
			msg: `ID:${id} does not exists`,
		});
	}

	const newPeople = people.filter((person) => person.id !== id);
	res.status(200).json({
		success: true,
		person: newPeople,
	});
});

// Handling post request for the form that is in method-public folder
app.post("/login", (req, res) => {
	console.log(req.body);
	const { name } = req.body;
	if (name === "john") {
		res.status(200).send(`Welcome ${name} !`);
	} else {
		res.status(401).send("Authorization Failed !!");
	}
});

app.get("/products", (req, res) => {
	res.status(200).json({
		success: true,
		data: req.user,
	});
});

// => Listening to port
const PORT = 3500;
const URL = "localhost";
app.listen(PORT, URL, () => {
	console.log("Listening on PORT : ", PORT);
});
