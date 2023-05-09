const logEvents = require("./logEvents");

const EventEmitter = require("events");

// Creating our own Event Emitting Class which extends the core module Event Module class
class MyEmitter extends EventEmitter {}

// Initializing the object of our Event Emitting class MyEmitter
const myEmitter = new MyEmitter();

// Listening to an event using the myEmitter object.
myEmitter.on("log", (msg) => logEvents(msg));

// Emitting the event to which we are listening to
setTimeout(() => {
	myEmitter.emit("log", "Log Event Emitted");
}, 2000);
