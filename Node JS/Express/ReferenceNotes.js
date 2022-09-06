// => In express, we create the server app as following:
// Method 1:
// Step 1. import the express package which will return the express() method.
// Step2. Call the express() method which will inturn return the server app.
// const express = require("express");
// const app = express();

// Method 2: We will directly call the express() method at the time of importing.
// const app = require("express")();

// => Below are some methods that we get out of the express server app.
// app.get()
// app.post()
// app.put()
// app.delete()
// app.all()
// app.use()
// app.listen()

// => Setup static middleware -
// Using app.use() middle and static method from express to server the public folder which contains all static files of our server app. (Static files are the files which we dont need to be change by our server app)
// app.use(express.static("./public"));

// => For sending file as a response from the server - 
// app.get("/", (req, res) => {
// 	res.status(200).sendFile(path.resolve(__dirname, "./navbar/index.html"));
// });



// => For handling all other routes that are not defined by our server application
// app.all("*", (req, res) => {
// 	res.status(404).send("<h1>404 | Page Not Found !!</h1>");
// });

// => Listening to the server
// const PORT = 3500;
// const URL = "localhost";
// app.listen(PORT, URL, () => {
// 	console.log("Listening on PORT : ", PORT);
// });