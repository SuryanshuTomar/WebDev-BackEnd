const express = require("express");
const router = express.Router();

const {
	registerUser,
	loginUser,
	handleRefreshToken,
} = require("../../controllers/users.controller");

// user routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/refreshtoken", handleRefreshToken);

module.exports = router;
