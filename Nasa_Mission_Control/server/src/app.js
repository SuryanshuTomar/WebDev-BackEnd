// Imports
const express = require("express");

// Creating express server app
const app = express();

// JSON Parser Middleware
app.use(express.json());

// Exports
module.exports = app;
