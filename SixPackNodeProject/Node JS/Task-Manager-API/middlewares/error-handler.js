const { CustomError } = require("../errors/custom-error");

// Custom Error Handler
const errorHandlerMiddleware = (err, req, res, next) => {
	// if the err object is an instance of our CustomError class
	if (err instanceof CustomError) {
		return res.status(err.statusCode).json({ msg: err.message });
	}
	// otherwise return this if there is an internal server error
	return res.status(500).json({ msg: err.message });
};

module.exports = errorHandlerMiddleware;
