const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

// One way
// fs.readFile(`${__dirname}/files/starter.txt`, (err, data) => {
// 	if (err) throw err;

// 	console.log(data.toString());
// });

// Second way
// fs.readFile(`${__dirname}/files/starter.txt`, "utf-8", (err, data) => {
// 	if (err) throw err;

// 	console.log(data);
// });

// Second way : Better Version
// fs.readFile(
// 	path.join(__dirname, "files", "starter.txt"),
// 	"utf-8",
// 	(err, data) => {
// 		if (err) throw err;

// 		console.log(data);
// 	}
// );

// Write into a file : utf-8 encoding set by default
// fs.writeFile(
// 	path.join(__dirname, "files", "blackbox.txt"),
// 	"Operation Override Denied!!!. Self-Destruct Sequence will begin in T-Minus 10 secs......",
// 	(err) => {
// 		if (err) throw err;

// 		console.log("Commencing Operation Write...");
// 	}
// );

// Appending to a file
// fs.appendFile(
// 	path.join(__dirname, "files", "nodeSupport.txt"),
// 	"Requestion Node Support....",
// 	(err) => {
// 		if (err) throw err;
// 		console.log("Send Support Request.....");
// 	}
// );

// Better Approach For writing and appending to a file
// fs.writeFile(
// 	path.join(__dirname, "files", "air.txt"),
// 	"Aplha to Brave : Requesting Air Support!!!",
// 	(err) => {
// 		if (err) throw err;
// 		console.log("Requesting Complete...");

// 		fs.appendFile(
// 			path.join(__dirname, "files", "air.txt"),
// 			"\n\nBravo to Alpha: Send Coordinates for an Air Strike.....",
// 			(err) => {
// 				if (err) throw err;
// 				console.log("Preparing AirStrike...");
// 			}
// 		);

// Renaming the File and now its leading to a callback hell
// 		fs.rename(
// 			path.join(__dirname, "files", "air.txt"),
// 			path.join(__dirname, "files", "airStrike.txt"),
// 			(err) => {
// 				if (err) throw err;
// 				console.log("Mission Renamed!!");
// 			}
// 		);
// 	}
// );

// ------------------------------------------------------------------------------------------------------
// => Replacing Callback Hell with Promises and Async-Await -

const fileOps = async () => {
	try {
		// Reading a File
		const data = await fsPromises.readFile(
			path.join(__dirname, "files", "starter.txt"),
			"utf-8"
		);
		console.log(data);

		// Deleting a file -
		await fsPromises.unlink(path.join(__dirname, "files", "starter.txt"));

		// Writing into a file -
		await fsPromises.writeFile(
			path.join(__dirname, "files", "promiseWrite.txt"),
			data
		);

		// Appending to a files -
		await fsPromises.appendFile(
			path.join(__dirname, "files", "promiseWrite.txt"),
			"\n\nNice to meet you!"
		);

		// Renaming a file -
		await fsPromises.rename(
			path.join(__dirname, "files", "promiseWrite.txt"),
			path.join(__dirname, "files", "writeComplete.txt")
		);

		// Reading the new File -
		const newData = await fsPromises.readFile(
			path.join(__dirname, "files", "writeComplete.txt"),
			"utf8"
		);
		console.log(newData);
	} catch (err) {
		console.log("Error : ", err);
	}
};

fileOps();

// Exit on Uncaught Errors
process.on("uncaughtException", (err) => {
	console.error("There is an uncaught exception : ", err);
	process.exit(1);
});
