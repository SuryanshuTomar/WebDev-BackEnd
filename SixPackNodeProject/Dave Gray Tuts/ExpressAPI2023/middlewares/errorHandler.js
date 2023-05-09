const { logEvents } = require("./logEvents");

module.exports = errorHandler = (err, req, res, next) => {
	logEvents(`${err.name}: ${err.message}`, "errLog.txt");
	// console.error(err.stack);
	res.status(500).json({
		success: false,
		message: err.message,
	});
};
