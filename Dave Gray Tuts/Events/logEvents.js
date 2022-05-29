const { format } = require("date-fns");
const { v4: uuid } = require("uuid");

const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");
// const { appendFile } = require("fs/promises");

const logEvents = async (message) => {
	const dateTime = format(new Date(), "yyyy-MM-dd   HH:mm:ss");
	const logTime = `${dateTime}\t${uuid()}\t${message}`;
	console.log(logTime);

	try {
		if (!fs.existsSync(path.join(__dirname, "logs"))) {
			fsPromises.mkdir(`${__dirname}/logs`);
		}
		await fsPromises.appendFile(
			path.join(__dirname, "logs", "eventLog.txt"),
			`${logTime}\n`
		);
	} catch (err) {
		console.error(err);
	}
};

// Date and UUID functions
// console.log(format(new Date(), "yyyy-MM-dd   HH:mm:ss"));
// console.log(uuid());

module.exports = logEvents;
