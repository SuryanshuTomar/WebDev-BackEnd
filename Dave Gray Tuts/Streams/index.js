const fs = require("fs");
const path = require("path");

// Creating a Read Stream
const rs = fs.createReadStream(path.join(__dirname, "files", "lorem.txt"), {
	encoding: "utf-8",
});

// Creating a Write Stream
const ws = fs.createWriteStream(path.join(__dirname, "files", "newLorem.txt"));

// Listening to the data coming from the Read Stream
rs.on("data", (dataChunk) => {
	// Writing to the files using the Write Stream
	ws.write(dataChunk);
	console.log("Data Transfer Complete...");
});

// Creating Pipeline from rs to ws for efficiency
rs.pipe(ws);
