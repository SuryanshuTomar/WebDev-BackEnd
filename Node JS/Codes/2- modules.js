// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require("./3-names");
const sayHi = require("./4-utils");
const data = require("./5-alternativeModules");
require("./6-blownMind");

console.log(names);
sayHi(names.john);
sayHi(names.peter);

console.log(data);
