import jwt from "jsonwebtoken";

export const sendCookie = (user, res, message, statusCode = 200) => {
	// create token
	const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

	res.status(statusCode)
		.cookie("token", token, {
			httpOnly: true,
			maxAge: 1000 * 60 * 15, // token cookie will expire in 15mins.
			sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none", // This means we can now share the cookie in cross origin.
			secure: process.env.NODE_ENV === "Development" ? false : true, // if "sameSite" is set to "none" then "secure" must be set to "true".
		})
		.json({
			success: true,
			message,
		});
};
