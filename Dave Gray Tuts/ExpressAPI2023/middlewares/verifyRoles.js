const verifyRoles = (...allowedRoles) => {
	// return the middleware function to execute
	return (req, res, next) => {
		// if we do not have a request object or if request object has not roles property then return the response 401.
		if (!req?.roles)
			return res.status(401).json({
				success: false,
				message: "Unauthorized",
			});

		// if the roles are present in request object
		// create a copy of the allowedRoles
		const rolesArr = [...allowedRoles];

		// console.log(rolesArr);
		// console.log(req.roles);

		// comparing the roles on the request object and the allowedRoles.
		// and even if one of allowedRoles present in the request object "roles" property then it will return true to the result.
		const result = req.roles
			.map((role) => rolesArr.includes(role))
			.find((val) => val === true);

			console.log("roles", result);
		// if no value in the result is present then return the response for unauthorized
		if (!result)
			return res.status(401).json({
				success: false,
				message: "Unauthroized",
			});



		// otherwise go to the next middleware
		next();
	};
};

module.exports = { verifyRoles };
