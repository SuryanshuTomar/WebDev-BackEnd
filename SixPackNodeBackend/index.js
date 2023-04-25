import http from "http";
import { gfName as girl } from "./features.js";

const server = http.createServer((req, res) => {
	console.log(req.url);
	res.end("Noice");
});

console.log(girl);

server.listen(8000, () => {
	console.log("Server Online !");
});
