import http from "http";
import fs from "fs";
import path from "path";
import { gfName as girl, generateRandomPercentage } from "./features.js";

console.log(girl);
console.log(generateRandomPercentage());

// Async File Read
// console.log(process.cwd() + "\\" + path.basename("./features.js"));
// fs.readFile(process.cwd() + "\\" + path.basename("./features.js"), () => {
// 	console.log("File Read");
// });

// Sync File Read
const home = fs.readFileSync("./index.html");

const server = http.createServer((req, res) => {
	console.log(req.url);

	// fs.readFile(
	// 	process.cwd() + "\\" + path.basename("./index.html"),
	// 	(err, homeData) => {
	// 		res.end(homeData);
	// 	}
	// );

	res.end(home);
});

server.listen(8000, () => {
	console.log("Server Online !");
});
