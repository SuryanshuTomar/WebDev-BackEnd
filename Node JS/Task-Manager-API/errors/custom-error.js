// Custom Error Class for API
class CustomError extends Error {
	constructor(statusCode, message) {
		super(message);
		this.statusCode = statusCode;
	}
}

// create and return the instance of CustomError class
const createCustomError = (statusCode, message) => {
	return new CustomError(statusCode, message);
};

module.exports = { CustomError, createCustomError };
