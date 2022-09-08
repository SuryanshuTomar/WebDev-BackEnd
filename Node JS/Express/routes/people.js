const express = require("express");
const router = express.Router();

const { people } = require("../data/data");

router.get("/", (req, res) => {
	res.status(200).json({
		success: true,
		data: people,
	});
});

router.post("/", (req, res) => {
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

router.put("/:id", (req, res) => {
	const { name } = req.body;
	let { id } = req.params;
	id = +id;

	if (people.length < id) {
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

router.delete("/:id", (req, res) => {
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

module.exports = router;
