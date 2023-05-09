const mongoose = require("mongoose");

const connectDB = function (URL) {
	return mongoose
		.connect(URL, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true,
		})
		.then(() => console.log("Connected to MongoDB successfully..."))
		.catch((err) => console.log(err));
};

module.exports = connectDB;
