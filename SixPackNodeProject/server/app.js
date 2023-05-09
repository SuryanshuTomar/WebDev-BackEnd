// imports
import express, { urlencoded } from "express";
import userRouter from "./routes/users.route.js";
import taskRouter from "./routes/tasks.route.js";
import { errorMiddleware } from "./middlewares/error.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";

// create express app
export const app = express();

// - Middlewares -
// cors middleware
app.use((req, res, next) => {
	console.log(req.headers.origin);
	next();
});
app.use(
	cors({
		origin: [process.env.FRONTEND_URL, "http://127.0.0.1:5173"], // cross orgin domain that are allowed.
		method: ["GET", "POST", "PUT", "DELETE"], // methods allowed in cross origin
		credentials: true, // by default it is set to false and if false then whatever headers we are sending from server won't reach the client along with cookies
	})
);

// logger middleware
app.use(morgan("dev"));

// json parser middleware
app.use(express.json());

// cookie parser middleware -> This will allow us to read cookies data sent by the client
app.use(cookieParser());

// body parser middleware -> data sent by forms in through url from the client
app.use(express.urlencoded({ extended: false }));

// api route middleware
app.use("/api/v1/users", userRouter);
app.use("/api/v1/tasks", taskRouter);

// error handler middleware
app.use(errorMiddleware);
