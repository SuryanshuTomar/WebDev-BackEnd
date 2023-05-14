// imports
const mongoose = require("mongoose");

// import Schema Class from mongoose
const Schema = mongoose.Schema;

// create am employee schema instance
const employeesSchema = new Schema({
	firstname: {
		type: String,
		required: true,
	},
	lastname: {
		type: String,
		required: true,
	},
});

// create an employee model from the employeesSchema
const employeesModel = mongoose.model("Employee", employeesSchema);
// Note: Mongoose automatically looks for the plural, lowercase version of the model name. Thus, for the above model, "Employee" is for the "employees" collection in the database.

// export the employeesModel
module.exports = employeesModel;
