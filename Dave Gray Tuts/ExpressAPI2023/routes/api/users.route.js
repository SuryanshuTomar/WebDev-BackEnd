const express = require("express");
const router = express.Router();

const { createNewUser } = require("../../controllers/users.controller");

// user routes
router.post("/register", createNewUser);

module.exports = router;
