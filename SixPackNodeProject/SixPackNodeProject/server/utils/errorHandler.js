// Custom Error Handler Class for the API
class ErrorHandler extends Error {
	constructor(message, statusCode) {
		super(message);
		this.statusCode = statusCode;
	}
}

// create and return the instance of CustomError class
const createCustomError = (message, statusCode) => {
	return new ErrorHandler(message, statusCode);
};

export { ErrorHandler, createCustomError };
