// imports
import mongoose from "mongoose";

// Get mongoose Schema Class
const Schema = mongoose.Schema;

// create schema
const taskSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
			minlength: 4,
			maxlength: 50,
		},
		description: {
			type: String,
			required: true,
		},
		isCompleted: {
			type: Boolean,
			required: true,
			default: false,
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Users",
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

// Create Task Model
const Task = mongoose.model("Tasks", taskSchema);

// export Task Model
export { Task };
