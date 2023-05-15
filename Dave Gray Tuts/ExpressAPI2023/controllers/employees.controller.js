// imports
const Employee = require("../models/employees.model");

// controllers
const getAllEmployees = async (req, res, next) => {
	const employees = await Employee.find();

	try {
		if (!employees)
			return res.status(204).json({
				success: false,
				message: "Not Employees Found!",
			});

		res.status(200).json({
			success: true,
			data: employees,
		});
	} catch (error) {
		next(error);
	}
};

const getEmployee = async (req, res, next) => {
	if (!req?.params?.id) {
		return req.status(400).json({
			success: false,
			message: `Employee id parameter required!`,
		});
	}
	console.log(req.params.id);

	try {
		const employee = await Employee.findOne({
			_id: req.params.id,
		}).exec();

		console.log(employee);
		if (!employee) {
			return res.status(400).json({
				success: false,
				message: `No Employee match the id: ${req?.params?.id}`,
			});
		}

		res.status(200).json({
			success: true,
			data: employee,
		});
	} catch (error) {
		next(error);
	}
};

const createEmployee = async (req, res, next) => {
	if (!req?.body?.firstname || !req?.body?.lastname) {
		return res.status(400).json({
			success: false,
			message: "First and Last names are required!",
		});
	}

	try {
		const newEmployee = await Employee.create({
			firstname: req.body.firstname,
			lastname: req.body.lastname,
		});

		res.status(201).json({
			success: true,
			data: newEmployee,
		});
	} catch (error) {
		next(error);
	}
};

const updateEmployee = async (req, res, next) => {
	if (!req?.body?.id) {
		return req.status(400).json({
			success: false,
			message: `Employee id parameter required!`,
		});
	}

	try {
		const updatedEmployee = await Employee.findOne({
			_id: req.body.id,
		}).exec();

		if (!updatedEmployee) {
			return res.status(204).json({
				success: false,
				message: `No Employee match the id: ${req.body?.id}`,
			});
		}

		if (req?.body?.firstname) updatedEmployee.firstname = req.body.firstname;
		if (req?.body?.lastname) updatedEmployee.lastname = req.body.lastname;

		// Now save the updated Employee to the database
		updatedEmployee = await updatedEmployee.save();

		res.json({
			success: true,
			data: updatedEmployee,
		});
	} catch (error) {
		next(error);
	}
};

const deleteEmployee = async (req, res) => {
	if (!req?.body?.id) {
		return req.status(400).json({
			success: false,
			message: `Employee id parameter required!`,
		});
	}

	try {
		const employee = await Employee.findOne({
			_id: req.body.id,
		}).exec();

		if (!employee) {
			return res.status(204).json({
				success: false,
				message: `No Employee match the id: ${req.body?.id}`,
			});
		}

		// delete the employee from db
		employee = await employee.deleteOne({ _id: req.body.id });

		res.json({
			success: true,
			data: employee,
		});
	} catch (error) {
		next(error);
	}
};

// exports
module.exports = {
	getAllEmployees,
	getEmployee,
	createEmployee,
	updateEmployee,
	deleteEmployee,
};
