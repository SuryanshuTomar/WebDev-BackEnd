const express = require("express");
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(8000, "localhost", () => {
	console.log("Server listening on PORT: ", 8000);
});
