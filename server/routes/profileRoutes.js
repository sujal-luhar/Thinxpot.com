const express = require("express");
const router = express.Router();
const { fetchUserLikes } = require("../controllers/likeController");
const { passport } = require("../middlewares/passport");
const {
  createFollow,
  getFollowStatus,
  removeFollow,
  getFollowing,
  getFollowers,
  searchFollowing,
  searchFollowers
} = require("../controllers/followController");

router.get(
  "/likes",
  passport.authenticate("jwt", { session: false }),
  fetchUserLikes
);

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

router.get(
  "/search/following",
  passport.authenticate("jwt", { session: false }),
  searchFollowing
);

router.get(
  "/search/followers",
  passport.authenticate("jwt", { session: false }),
  searchFollowers
);



module.exports = router;
