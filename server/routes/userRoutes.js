const express = require("express");
const router = express.Router();
const {
  register,
  login,
  verifyEmail,
  logout,
  edit,
  searchUsers,
  getUserData
} = require("../controllers/userController"); // Import the user controller

// Define routes that use controller functions
router.post("/register", register);
router.get("/verify", verifyEmail);
router.post("/login", login);
router.get("/logout", logout);
router.put("/:userId/editprofile", edit);
router.get('/search', searchUsers);
router.get("/:userId", getUserData);
// Add more routes and controllers as needed

module.exports = router;
