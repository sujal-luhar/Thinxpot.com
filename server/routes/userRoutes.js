const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/userController"); // Import the user controller

// Define routes that use controller functions
router.post("/register", register);
router.post("/login", login);
// Add more routes and controllers as needed

module.exports = router;
