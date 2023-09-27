const express = require("express");
const router = express.Router();
const {
  register,
  login,
  verifyEmail,
  logout
} = require("../controllers/userController"); // Import the user controller

// Define routes that use controller functions
router.post("/register", register);
router.get("/verify", verifyEmail);
router.post("/login", login);
router.get('/logout', logout);
// Add more routes and controllers as needed

module.exports = router;
