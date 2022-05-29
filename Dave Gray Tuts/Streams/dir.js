const fs = require("fs");

// Checking if a directory exists because we don't want to override the existing data
if (!fs.existsSync("./newDir")) {
	// Creating new Directory
	fs.mkdir("./newDir", (err) => {
		if (err) throw err;
		console.log("New Directory Created!!");
	});
}

// Deleting Directory if ./newDir exists already
if (fs.existsSync("./newDir")) {
	// Creating new Directory
	fs.rmdir("./newDir", (err) => {
		if (err) throw err;
		console.log("New Directory Deleted!!");
	});
}
