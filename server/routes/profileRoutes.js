const express = require("express");
const router = express.Router();
const { passport } = require("../middlewares/passport");
const {
  createFollow,
  getFollowStatus,
  removeFollow,
  getFollowing,
  getFollowers,
} = require("../controllers/followController");

router.post(
  "/follow/:userId/create",
  passport.authenticate("jwt", { session: false }),
  createFollow
);

router.get(
  "/follow/:userId/followStatus",
  passport.authenticate("jwt", { session: false }),
  getFollowStatus
);

router.delete(
  "/follow/:userId/remove",
  passport.authenticate("jwt", { session: false }),
  removeFollow
);

router.get(
  "/follow/following",
  passport.authenticate("jwt", { session: false }),
  getFollowing
);

router.get(
  "/follow/followers",
  passport.authenticate("jwt", { session: false }),
  getFollowers
);

module.exports = router;
