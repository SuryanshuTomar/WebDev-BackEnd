import { connectDb } from "./db/connectDb.js";
import { app } from "./app.js";
import dotenv from "dotenv";

// configuring env file
dotenv.config({
	path: "./config.env",
});

// start server
async function startServer() {
	const PORT = process.env.PORT;
	const HOST = process.env.HOST;
	const URI = process.env.MONGO_URI;
	try {
		await connectDb(URI);
		app.listen(PORT, HOST, () => {
			console.log(`Server Listening on ${PORT}...`);
		});
	} catch (err) {
		console.log("Connection Failed !!");
	}
}
startServer();
