import jwt from "jsonwebtoken";

export const sendCookie = (user, res, message, statusCode = 200) => {
	// create token
	const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

	res.status(statusCode)
		.cookie("token", token, {
			httpOnly: true,
			maxAge: 1000 * 60 * 15, // token cookie will expire in 15mins.
			sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none", // Setting this to "none" means we can now share the cookie in cross origin. By default it is set to "lax" in which we can only share in same origin.
			secure: process.env.NODE_ENV === "Development" ? false : true, // if "sameSite" is set to "none" then "secure" must be set to "true". // Note: we have to set the property "secure: true" also along with the httpOnly property and this "secure" property will allow us to send the cookie along with response only to the https server.
		})
		.json({
			success: true,
			message,
		});
};
