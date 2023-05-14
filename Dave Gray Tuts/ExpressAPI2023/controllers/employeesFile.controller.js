// imports

// local file DB data
const data = {
	employees: require("../data/employees.json"),
	setEmployees: function (data) {
		this.employees = data;
	},
};

// controllers
const getAllEmployees = async (req, res, next) => {
	res.send(data.employees);
};

const getEmployee = (req, res) => {
	const employee = data.employees.find(
		(emp) => emp.id === parseInt(req.params.id)
	);

	if (!employee) {
		return res.status(400).json({
			success: false,
			message: `Employee id ${req.params.id} not found!`,
		});
	}

	res.status(200).json({
		success: true,
		data: employee,
	});
};

const createEmployee = (req, res) => {
	const newEmployee = {
		id: data.employees?.length
			? data.employees[data.employees.length - 1].id + 1
			: 1,
		firstname: req.body.firstname,
		lastname: req.body.lastname,
	};

	if (!newEmployee.firstname || !newEmployee.lastname) {
		return res.status(400).json({
			success: false,
			message: "First and Last names are required!",
		});
	}

	data.setEmployees([...data.employees, newEmployee]);
	res.status(201).json({
		success: true,
		data: data.employees,
	});
};

const updateEmployee = (req, res) => {
	const updatedEmployee = data.employees.find(
		(emp) => emp.id === parseInt(req.body?.id)
	);

	if (!updatedEmployee) {
		return res.status(400).json({
			success: false,
			message: `Employee id ${req.body?.id} not found!`,
		});
	}

	if (req.body.firstname) updatedEmployee.firstname = req.body.firstname;
	if (req.body.lastname) updatedEmployee.lastname = req.body.lastname;

	const filteredEmployees = data.employees.filter(
		(emp) => emp.id !== req.body.id
	);

	const unsortedArray = [...filteredEmployees, updatedEmployee];
	data.setEmployees(unsortedArray.sort((a, b) => a.id - b.id));

	res.json({
		success: true,
		data: data.employees,
	});
};

const deleteEmployee = (req, res) => {
	const employee = data.employees.find(
		(emp) => emp.id === parseInt(req.body.id)
	);

	if (!employee) {
		return res.status(400).json({
			success: false,
			message: `Employee id ${req.body?.id} not found!`,
		});
	}

	const filteredEmployees = data.employees.filter(
		(emp) => emp.id !== req.body.id
	);

	data.setEmployees(filteredEmployees);
	res.json({
		success: true,
		data: data.employees,
	});
};

// exports
module.exports = {
	getAllEmployees,
	getEmployee,
	createEmployee,
	updateEmployee,
	deleteEmployee,
};
