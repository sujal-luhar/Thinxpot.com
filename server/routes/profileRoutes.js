const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profileController");
const { passport } = require("../middlewares/passport");

// Define routes that use controller functions
router.post(
  "/createOrUpdate",
  passport.authenticate("jwt", { session: false }),
  profileController.createOrUpdateProfile
);
router.get(
  "/user/:userId",
  passport.authenticate("jwt", { session: false }),
  profileController.getProfile
);

// Add more routes for other profile-related actions

module.exports = router;
