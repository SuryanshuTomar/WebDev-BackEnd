// ------------------------------------------------------------------------------------
// Imports ->
import cookieParser from "cookie-parser";
import express from "express";
import path from "path";

const app = express();

// ------------------------------------------------------------------------------------
// Middlewares ->
// Using this middleware we will be able accesss data sent from client side form
app.use(express.urlencoded({ extended: true }));

// We can also serve static files using the static() method provided by the express
// But Those files must be present in the public folder
// Also static() method is a middleware so we have to put it inside use() method of our app.
app.use(express.static(path.join(path.resolve(), "public")));

// Using Cookie Parser Middlerware
app.use(cookieParser());

// Setting the template/view engine for express
// so that it can then render view file from views folder
app.set("view engine", "ejs");

// ------------------------------------------------------------------------------------
// Middleware Functions ->
const isAuthenticated = (req, res, next) => {
	// Check if user is logged In by checking the user token
	const { token } = req.cookies;

	// If token is present then go to next Middleware or Route
	if (token) {
		next();
		return;
	}

	// else display the login page
	res.render("login");
};

// ------------------------------------------------------------------------------------
// GET Paths ->
app.get("/", (req, res) => {
	res.redirect("/home");
});

app.get("/home", isAuthenticated, (req, res) => {
	res.render("index");
});

app.get("/contact", isAuthenticated, (req, res) => {
	// res.sendStatus(200);
	// res.status(200).send("Home");

	// One way of getting the file path and send the file
	// res.sendFile(process.cwd() + "\\" + path.basename("/index.html"));

	// Another way of getting the file path and send the file
	// const currentDir = path.resolve();
	// res.sendFile(path.join(currentDir, "./index.html"));

	// Render view file
	res.render("contact", { name: "Alex" });

	// Now we can just send the file using sendFile() of res after we are done
	// with the setup of express.static();
	// res.sendFile("index");
});

app.get("/login", (req, res) => {
	res.render("login");
});

app.get("/logout", (req, res) => {
	res.render("logout");
});

// ------------------------------------------------------------------------------------
// POST Path ->
app.post("/home", (req, res) => {
	res.sendFile(path.join(path.resolve(), "public", "index.html"));
});

app.post("/contact", (req, res) => {
	// console.log(req.body);
	res.render("contact", { data: "Form Data Submitted Successfully !" });
});

app.post("/login", (req, res) => {
	res.cookie("token", "iAmIn", {
		httpOnly: true,
		expires: new Date(Date.now() + 60 * 1000 * 3),
	});
	res.redirect("/home");
});

app.post("/logout", (req, res) => {
	res.cookie("token", "null", {
		httpOnly: true,
		expires: new Date(Date.now()),
	});
	res.redirect("/login");
});

// ------------------------------------------------------------------------------------
// Start Server And Listen ->
app.listen(8000, "localhost", () => {
	console.log("server online");
});
