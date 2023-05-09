// Console Checking
console.log("Node Running");

// Node Global Object
// console.log(global);

const os = require("os");
const path = require("path");

// OS Module of Node js
console.log(os.type());
console.log(os.version());
console.log(os.homedir());

// Global Enviroment Variable that are accessible to use in node js
// 1. Prints the Directory path
console.log(__dirname);

// 2. Prints the File path
console.log(__filename);

// 3. Another way to Prints the Directory path
console.log(path.dirname(__filename));

// 4. Prints the File name
console.log(path.basename(__filename));

// 5. Prints the File extension
console.log(path.extname(__filename));

// 6. Prints the All the file related info - dirname, filename, extension, root path, basename
console.log(path.parse(__filename));

// Importing math file export functions
const { add, subtract, multiply, divide } = require("./math");
console.log(add(10, 5));
console.log(subtract(10, 5));
console.log(multiply(10, 5));
console.log(divide(10, 5));
