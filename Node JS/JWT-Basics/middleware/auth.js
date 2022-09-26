const jwt = require("jsonwebtoken");
const CustomAPIError = require("../errors/custom-error");

const authenticationMiddleware = async (req, res, next) => {
	const { authorization } = req.headers;

	// If token is not provided or if token bearer is wrong
	if (!authorization || !authorization.startsWith("Bearer ")) {
		throw new CustomAPIError("No Token Provided!! ", 401);
	}

	// Checking if the token provided is correct
	const bearerToken = authorization.split(" ")[1];

	try {
		const decodedToken = jwt.verify(bearerToken, process.env.JWT_SECRET);
		const { id, username } = decodedToken;
		req.user = { id, username };
	} catch (err) {
		throw new CustomAPIError("Not Authorized to access this route", 401);
	}

	next();
};

module.exports = authenticationMiddleware;
