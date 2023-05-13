const allowedOrigins = require("./allowedOrigins");

const corsOptions = {
	origin: (origin, cbFn) => {
		// if the origin is localhost then it will be undefined in that case and
		// if the origin which requested the server is present in the whitelist then OK.
		if (!origin ?? allowedOrigins.includes(origin)) {
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

// cors npm configuring Notes -
// https://www.npmjs.com/package/cors#configuration-options

// Note -
// "origin" option sets the -> Access-Control-Allow-Origin CORS header
// "method" option sets the -> Access-Control-Allow-Methods CORS header
// "credentials" option sets the -> Access-Control-Allow-Credentials CORS header
// "maxAge" option sets the -> Access-Control-Max-Age  CORS header

// Also if we have manually set the "Access-Control-Allow-Credentials" then the implementation is written in credentials.js file and just use as a normal middleware in the server.js file just before cors middleware like ->
// const credentials = require("../middlewares/credentials");
// app.use(credentials)
