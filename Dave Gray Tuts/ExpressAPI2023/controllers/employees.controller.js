// Local File DB Data
const data = {};
data.employees = require("../data/employees.json");

const getAllEmployees = async (req, res, next) => {
	res.send(data.employees);
};

const getEmployee = (req, res) => {
	res.json({
		id: req.params.id,
	});
};

const createEmployee = (req, res) => {
	res.json({
		firstName: req.body.firstname,
		lastName: req.body.lastname,
	});
};

const updateEmployee = (req, res) => {
	res.json({
		firstName: req.body.firstname,
		lastName: req.body.lastname,
	});
};

const deleteEmployee = (req, res) => {
	res.json({
		id: req.body.id,
	});
};

module.exports = {
	getAllEmployees,
	getEmployee,
	createEmployee,
	updateEmployee,
	deleteEmployee,
};
