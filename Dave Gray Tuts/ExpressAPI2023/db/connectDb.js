const mongoose = require("mongoose");

const connectDB = (url) => {
	return mongoose
		.connect(url, {
			dbName: "companyDB",
		})
		.then(() => console.log("Database Connected"));
};

module.exports = { connectDB };
