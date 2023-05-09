const { people } = require("../data/data");

const getPeople = (req, res) => {
	res.status(200).json({
		success: true,
		data: people,
	});
};

const createPerson = (req, res) => {
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
};

const updatePerson = (req, res) => {
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
};

const deletePerson = (req, res) => {
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
};

module.exports = { getPeople, createPerson, updatePerson, deletePerson };
