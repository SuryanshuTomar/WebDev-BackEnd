import { connectDb } from "./db/connectDb.js";
import { app } from "./app.js";

// start server
async function startServer() {
	try {
		await connectDb("mongodb://127.0.0.1:27017");

		const PORT = 8000;
		const HOST = "localhost";
		app.listen(PORT, HOST, () => {
			console.log(`Server Listening on ${PORT}...`);
		});
	} catch (err) {
		console.log("Connection Failed !!");
	}
}
startServer();
