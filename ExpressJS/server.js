const express = require("express");

// We set up our application server using the express function that's exported from the express package.
const app = express();

// PORT
const PORT = 3500;

// Listening to the application server
app.listen(PORT, "localhost", () => {
	console.log(`Listening on PORT : ${PORT}`);
});
