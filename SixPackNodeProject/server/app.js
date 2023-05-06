// imports
import express from "express";
import userRouter from "./routes/users.route.js";
import cookieParser from "cookie-parser";
import taskRouter from "./routes/tasks.route.js";
import { errorMiddleware } from "./middlewares/error.js";

// create express app
export const app = express();

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/users", userRouter);
app.use("/api/v1/tasks", taskRouter);

// error handler
app.use(errorMiddleware);
