const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
	// check if the authorization header is sent with the request
	const authHeader = req.headers["authorization"];

	console.log(authHeader); // Bearer token
	// if not sent then sent the unauthorized response
	if (!authHeader) {
		return res.status(401).json({
			success: false,
			message: "Unauthorized!!",
		});
	}

	// if the authorization header is present then get the token from the header
	const accessToken = authHeader.split(" ")[1];

	// verity the access token
	jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
		// The status here is 403 -> forbidden as accessToken sent doesn't match
		// And invalid token is sent
		if (err)
			return res.status(403).json({
				success: false,
				message: "Forbidden! Login Again!",
			});

		// if there token sent to server is correct,
		// then we see the decoded part from the token
		// And attach the current user info from the decoded part token to the 'req' object, so that the request that is sent by user can now be handled by the next middleware request handler based on the current user.
		req.user = decoded.username;

		// call the next middleware
		next();
	});
};

module.exports = { verifyToken };
