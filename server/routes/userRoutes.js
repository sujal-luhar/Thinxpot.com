const express = require("express");
const router = express.Router();
const {
  register,
  login,
  verifyEmail,
  logout,
  edit,
  searchUsers,
  getUserData,
} = require("../controllers/userController"); // Import the user controller
const { passport } = require("../middlewares/passport");
const { fetchUserLikes } = require("../controllers/likeController");

// Define routes that use controller functions
router.post("/register", register);
router.get("/verify", verifyEmail);
router.post("/login", login);
router.get("/logout", logout);
router.put(
  "/editprofile",
  passport.authenticate("jwt", { session: false }),
  edit
);
router.get("/search", searchUsers);
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  getUserData
);
router.get(
  "/likes/:id",
  passport.authenticate("jwt", { session: false }),
  fetchUserLikes
);
router.get("/search", searchUsers);
router.get("/:userId", getUserData);

// place it to profileRoutes.js
router.put("/:userId/editprofile", edit);
// Add more routes and controllers as needed

module.exports = router;
