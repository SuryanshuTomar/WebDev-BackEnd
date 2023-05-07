// imports
const express = require("express");
const path = require("path");

// Local File DB Data
const data = {};
data.employees = require("../../data/data.json");

// setup router
const employeeRouter = express.Router();

// routes
employeeRouter
	.route("/")
	.get((req, res) => {
		res.send(data.employees);
	})
	.post((req, res) => {
		res.json({
			firstName: req.body.firstname,
			lastName: req.body.lastname,
		});
	})
	.put((req, res) => {
		res.json({
			firstName: req.body.firstname,
			lastName: req.body.lastname,
		});
	})
	.delete((req, res) => {
		res.json({
			id: req.body.id,
		});
	});

employeeRouter.route("/:id").get((req, res) => {
	res.json({
		id: req.params.id,
	});
});

// exports
module.exports = { employeeRouter };
