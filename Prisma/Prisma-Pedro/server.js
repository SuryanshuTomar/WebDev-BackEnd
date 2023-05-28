// import
const express = require("express");
const { PrismaClient } = require("@prisma/client");

// create express app
const app = express();

// create prisma client instance
// so that we can access the data in the db using this instance
const prisma = new PrismaClient();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get("/", async (req, res) => {
	const allUsers = await prisma.user.findMany();
	res.status(200).json(allUsers);
});

app.post("/new", async (req, res) => {
	const { firstName, lastName, age } = req.body;
	const newUser = await prisma.user.create({
		data: { firstName, lastName, age },
	});

	res.status(201).json(newUser);
});

app.put("/:id", async (req, res) => {
	const { id } = req.params;
	const { age } = req.body;
	const updatedUser = await prisma.user.update({
		where: {
			id: parseInt(id),
		},
		data: {
			age: parseInt(age),
		},
	});

	res.status(201).json(updatedUser);
});

app.delete("/:id", async (req, res) => {
	const { id } = req.params;

	const deletedUser = await prisma.user.delete({
		where: {
			id: parseInt(id),
		},
	});

	res.status(201).json(deletedUser);
});

app.post("/house/new", async (req, res) => {
	const { address, wifiPassword, ownerId, builtById } = req.body;
	const newHouse = await prisma.house.create({
		data: { address, wifiPassword, ownerId, builtById },
	});
	res.json(newHouse);
});

app.get("/house/all", async (req, res) => {
	const allHouses = await prisma.house.findMany({
		include: {
			owner: true,
			builtBy: true,
		},
	});
	res.status(200).json(allHouses);
});

app.get("/house/:id", async (req, res) => {
	const { id } = req.params;
	const houseRelation = await prisma.house.findUnique({
		where: {
			id,
		},
		include: {
			owner: true,
			builtBy: false,
		},
	});
	res.status(200).json(houseRelation);
});

// start server
app.listen(8000, "localhost", () => {
	console.log("Server listening on PORT: ", 8000);
});
