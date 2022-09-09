const mongoose = require("mongoose");

const connectDB = (ConnectionURL) => {
	return mongoose
		.connect(ConnectionURL, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true,
		}) // only add this object for mongoose v5 and below. So no need to add this in mongoose v6
		.then(() => console.log("Connection to MongoDB successfull..."))
		.catch((error) => console.log(error));
};

module.exports = connectDB;