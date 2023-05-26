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
	const allUsers = await prisma.users.findMany();
	res.status(200).json(allUsers);
});

app.post("/new", async (req, res) => {
	const { firstName, lastName, age } = req.body;

	const newUser = await prisma.users.create({
		data: {
			firstName,
			lastName,
			age,
		},
	});

	res.status(201).json(newUser);
});

app.put("/:id", async (req, res) => {
	const { id } = req.params;
	const { age } = req.body;
	const updatedUser = await prisma.users.update({
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

	const deletedUser = await prisma.users.delete({
		where: {
			id: parseInt(id),
		},
	});

	res.status(201).json(deletedUser);
});

// start server
app.listen(8000, "localhost", () => {
	console.log("Server listening on PORT: ", 8000);
});
