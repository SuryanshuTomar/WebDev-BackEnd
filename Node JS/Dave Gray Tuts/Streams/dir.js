const fs = require("fs");

// Checking if a directory exists because we don't want to override the existing data
if (!fs.existsSync("./newDir")) {
	// Creating new Directory
	fs.mkdir("./newDir", (err) => {
		if (err) throw err;
		console.log("New Directory Created!!");
	});
} else {
	console.log("Directory not Created");
}
