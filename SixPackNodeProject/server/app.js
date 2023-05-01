// imports
import express from "express";
import userRouter from "./routes/users.routes.js";

// create express app
export const app = express();

// middlewares
app.use(express.json());
app.use("/users", userRouter);
