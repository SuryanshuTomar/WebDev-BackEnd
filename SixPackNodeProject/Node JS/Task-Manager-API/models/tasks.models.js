const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
		required: [true, "Must provide a 'name'"],
		minlength: [2, "'name' cannot be less than 2 charachters"],
		maxlength: [30, "'name' cannot be more than 30 charachters"],
	},
	completed: {
		type: Boolean,
		default: false,
	},
});

// Models are fancy constructors compiles from Schema definitions. An instance of a model is called a document. Models are responsible for creating and reading documents from the underlying MongoDB database.
// When we call mongoose.model() on a schema, Mongoose compiles a model for us.
// The first argument is the singular name of the collection of our model. Mongoose automatically looks for the plural, lowercased version of your model name. So "Task" is for the "tasks" collection in the database.
module.exports = mongoose.model("Task", TaskSchema);
