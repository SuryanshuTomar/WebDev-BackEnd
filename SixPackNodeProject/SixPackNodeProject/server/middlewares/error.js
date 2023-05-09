import { ErrorHandler } from "../utils/errorHandler.js";

// Custom Error Handler
export const errorMiddleware = (err, req, res, next) => {
	// if the err object is an instance of our CustomError class
	if (err instanceof ErrorHandler) {
		return res.status(err.statusCode).json({
			success: false,
			message: err.message,
		});
	}

	// otherwise return this if there is an internal server error
	return res.status(500).json({
		success: false,
		message: "Internal Server Error",
	});
};
