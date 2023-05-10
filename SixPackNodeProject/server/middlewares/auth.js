import { User } from "../models/users.models.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
	// getting user cookies
	const { token } = req.cookies;

	if (!token) {
		return res.status(401).json({
			success: false,
			message: "Login first!!",
		});
	}

	// Verifying the token
	const decoded = jwt.verify(token, process.env.JWT_SECRET);

	// attaching user to the request
	const user = await User.findById(decoded._id);
	req.user = user;
	next();
};
