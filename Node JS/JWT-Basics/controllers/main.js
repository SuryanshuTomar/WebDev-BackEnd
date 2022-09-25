const CustomAPIError = require("../errors/custom-error");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
	const { username, password } = req.body;
	if (!username || !password) {
		throw new CustomAPIError("Please provide email and password!! ", 400);
	}

	const id = new Date().getDate();
	// jwt.sign(payload, secret, options);
	// Try to keep the payload small, for better user experience
	const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
		expiresIn: "30d",
	});
	res.status(200).json({ msg: "User created", token });
};

const dashBoard = async (req, res) => {
	const { authorization } = req.headers;

	// If token is not provided or if token bearer is wrong
	if (!authorization || !authorization.startsWith("Bearer ")) {
		throw new CustomAPIError("No Token Provided!! ", 401);
	}

	// Checking if the token provided is correct
	const bearerToken = authorization.split(" ")[1];
	try {
		const decodedToken = jwt.verify(bearerToken, process.env.JWT_SECRET);

		// Send Data
		const luckyNumber = Math.floor(Math.random() * 100);
		res.status(200).json({
			msg: `Hello ${decodedToken.username}`,
			secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
		});
	} catch (err) {
		throw new CustomAPIError("Not Authorized to access this route", 401);
	}
};

module.exports = { login, dashBoard };
