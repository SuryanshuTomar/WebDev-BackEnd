import express from "express";
import path from "path";

const app = express();

app.get("/", (req, res) => {
	// res.sendStatus(200);
	// res.status(200).send("Home");

	// One way of getting the file path and send the file
	// res.sendFile(process.cwd() + "\\" + path.basename("/index.html"));

	// Another way of getting the file path and send the file
	const currentDir = path.resolve();
	res.sendFile(path.join(currentDir, "./index.html"));
});

app.listen(8000, "localhost", () => {
	console.log("server online");
});
