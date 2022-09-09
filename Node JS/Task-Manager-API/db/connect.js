const mongoose = require("mongoose");

const connectionString =
	"mongodb+srv://Death:Death@nodeexpressproject.ggrfm4l.mongodb.net/Task-Manager-API?retryWrites=true&w=majority";
// const connectionString =
// 	"mongodb+srv://<DatabaseUsername>:<DatabasePassword>@nodeexpressproject.ggrfm4l.mongodb.net/<DatabaseName>?retryWrites=true&w=majority";

const connectDB = (url) => {
	return mongoose
		.connect(connectionString, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true,
		}) // only add this object for mongoose v5 and below. So no need to add this in mongoose v6
		.then(() => console.log("Connection to MongoDB successfull..."))
		.catch((error) => console.log(error));
};

module.exports = connectDB;
