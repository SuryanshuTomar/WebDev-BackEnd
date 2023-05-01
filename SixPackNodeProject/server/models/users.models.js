// imports
import mongoose from "mongoose";

// Get mongoose Schema Class
const Schema = mongoose.Schema;

// create schema
const userSchema = new Schema({
	name: String,
	email: String,
	password: String,
});

// Create User Model
const User = mongoose.model("Users", userSchema);

// export User Model
export { User };
