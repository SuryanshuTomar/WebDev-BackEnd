// imports
const mongoose = require("mongoose");

// import Schema Class from mongoose
const Schema = mongoose.Schema;

// create am employee schema instance
const usersSchema = new Schema({
	username: {
		type: String,
		required: true,
	},
	roles: {
		User: {
			type: Number,
			default: 2001,
		},
		Editor: {
			type: Number,
		},
		Admin: {
			type: Number,
		},
	},
	password: {
		type: String,
		required: true,
	},
	refreshToken: {
		type: String,
	},
});

// create an employee model from the usersSchema
const usersModel = mongoose.model("User", usersSchema);

// export the usersModel
module.exports = usersModel;
