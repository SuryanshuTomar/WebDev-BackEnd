const path = require("path");

// return the path seprator specific to the platform we are running the code on
console.log(path.sep);

// returns the path taking the folder structure names as input
const filePath = path.join("content", "subfolder", "test.txt");
console.log(filePath);

// returns the base file in the file structure path
const base = path.basename(filePath);
console.log(base);

// takes sequence of path or path segments and returns the absolute path
const absolute = path.resolve(__dirname, filePath);
console.log(absolute);
