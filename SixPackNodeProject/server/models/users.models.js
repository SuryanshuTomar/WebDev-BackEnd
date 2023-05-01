// imports
import mongoose from "mongoose";

// Get mongoose Schema Class
const Schema = mongoose.Schema;

// create schema
const userSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			minlength: 4,
			maxlength: 50,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
			select: false,
		},
	},
	{
		timestamps: true,
	}
);

// Create User Model
const User = mongoose.model("Users", userSchema);

// export User Model
export { User };
