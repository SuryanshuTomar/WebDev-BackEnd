// imports
const express = require("express");
const {
	getAllEmployees,
	createEmployee,
	updateEmployee,
	deleteEmployee,
	getEmployee,
} = require("../../controllers/employees.controller");

// setup router
const employeeRouter = express.Router();

// routes
employeeRouter
	.route("/")
	.get(getAllEmployees)
	.post(createEmployee)
	.put(updateEmployee)
	.delete(deleteEmployee);

employeeRouter.route("/:id").get(getEmployee);

// exports
module.exports = { employeeRouter };
