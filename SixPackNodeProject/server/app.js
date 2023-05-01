// imports
import express from "express";
import userRouter from "./routes/users.routes.js";
import cookieParser from "cookie-parser";

// create express app
export const app = express();

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/users", userRouter);
