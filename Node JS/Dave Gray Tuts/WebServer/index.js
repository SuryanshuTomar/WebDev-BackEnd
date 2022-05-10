const http = require("http");
const path = require("path");
const fs = require("fs");
const fsPromises = require("fs").promises;

const logEvents = require("./logEvents");
const EventEmitter = require("events");
const { kill } = require("process");

class Emitter extends EventEmitter {}
const myEmitter = new Emitter();

// myEmitter.on("log", (msg) => logEvents(msg));
// myEmitter.emit("log", "Log Event Emitted...");

const HOSTNAME = "localhost";
const PORT = process.env.PORT || 3500;

const server = http.createServer((req, res) => {
	console.log(req.url, req.method);
});

server.listen(PORT, HOSTNAME, () => {
	console.log(`Server Running at ${HOSTNAME}:${PORT}`);
});
