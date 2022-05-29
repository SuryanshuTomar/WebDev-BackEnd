const { format } = require("date-fns");
const { v4: uuid } = require("uuid");

const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");
// const { appendFile } = require("fs/promises");

const logEvents = async (message, logName) => {
	const dateTime = format(new Date(), "yyyy-MM-dd   HH:mm:ss");
	const logTime = `${dateTime}\t${uuid()}\t${message}`;
	console.log(logTime);

	try {
		if (!fs.existsSync(path.join(__dirname, "..", "logs"))) {
			fsPromises.mkdir(`${__dirname}/../logs`);
		}
		await fsPromises.appendFile(
			path.join(__dirname, "..", "logs", logName),
			`${logTime}\n`
		);
	} catch (err) {
		console.error(err);
	}
};

// Date and UUID functions
// console.log(format(new Date(), "yyyy-MM-dd   HH:mm:ss"));
// console.log(uuid());

const logger = (req, res, next) => {
	logEvents(`${req.method}\t${req.headers.origin}\t${req.url}`, "reqLog.txt");
	console.log(`${req.method} - ${req.path}`);
	next();
};

module.exports = { logEvents, logger };
