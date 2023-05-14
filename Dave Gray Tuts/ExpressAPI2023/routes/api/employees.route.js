// imports
const express = require("express");
const {
	getAllEmployees,
	createEmployee,
	updateEmployee,
	deleteEmployee,
	getEmployee,
} = require("../../controllers/employees.controller");

const { ROLES_LIST } = require("../../config/rolesList");
const { verifyRoles } = require("../../middlewares/verifyRoles");

// setup router
const employeeRouter = express.Router();

// routes
employeeRouter
	.route("/")
	.get(getAllEmployees)
	.post(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), createEmployee)
	.put(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), updateEmployee)
	.delete(verifyRoles(ROLES_LIST.Admin), deleteEmployee);

employeeRouter.route("/:id").get(getEmployee);

// exports
module.exports = { employeeRouter };
