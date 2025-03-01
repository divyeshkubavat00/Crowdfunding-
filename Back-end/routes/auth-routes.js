const express = require("express");
const router = express.Router();
const { registerUser } = require("../controller/auth-controller");

router.post("/register", registerUser);  // POST route for registration

module.exports = router;
