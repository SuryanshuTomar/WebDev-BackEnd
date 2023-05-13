import mongoose from "mongoose";

function connectDb(url) {
	mongoose
		.connect(url, {
			dbName: "backendApi",
		})
		.then(() => console.log("Database Connected"))
		.catch((err) => console.log(err));
}

export { connectDb };