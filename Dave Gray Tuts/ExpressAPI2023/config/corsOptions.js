const whitelist = ["http://localhost:8000", "http://127.0.0.1:8000"];

const corsOptions = {
	origin: (origin, cbFn) => {
		// if the origin is localhost then it will be undefined in that case and
		// if the origin which requested the server is present in the whitelist then OK.
		if (!origin ?? whitelist.includes(origin)) {
			cbFn(null, true);
		}
		// else throw a new error
		else {
			cbFn(new Error("Not allowed by CORS"));
		}
	},
	optionsSuccessStatus: 200,
	method: ["GET", "POST", "PUT", "DELETE"],
	credentials: true,
};

module.exports = corsOptions;
