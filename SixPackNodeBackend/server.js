import express from "express";
import path from "path";

const app = express();

// We can also serve static files using the static() method provided by the express
// But Those files must be present in the public folder
// Also static() method is a middleware so we have to put it inside use() method of our app.
app.use(express.static(path.join(path.resolve(), "public")));

// Setting the template/view engine for express
// so that it can then render view file from views folder
app.set("view engine", "ejs");

app.get("/home", (req, res) => {
	// res.sendStatus(200);
	// res.status(200).send("Home");

	// One way of getting the file path and send the file
	// res.sendFile(process.cwd() + "\\" + path.basename("/index.html"));

	// Another way of getting the file path and send the file
	// const currentDir = path.resolve();
	// res.sendFile(path.join(currentDir, "./index.html"));

	// Render view file
	res.render("index", { name: "Alex" });

	// Now we can just send the file using sendFile() of res after we are done
	// with the setup of express.static();
	// res.sendFile("index");
});

app.listen(8000, "localhost", () => {
	console.log("server online");
});
