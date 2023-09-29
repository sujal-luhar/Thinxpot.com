// const express = require("express");
// const router = express.Router();
// const { passport } = require("../middlewares/passport");
// const {
//   getFollowStatus,
//   createFollow,
//   removeFollow,
//   getFollowers,
//   getFollowing,
// } = require("../controllers/followController");

// // Define routes that use controller functions

// //Do Follow
// router.post(
//   "/:userId/create",
//   passport.authenticate("jwt", { session: false }),
//   createFollow
// );

// //Do Unfollow
// router.delete(
//   "/:userId/remove",
//   passport.authenticate("jwt", { session: false }),
//   removeFollow
// );

// //get list of specific users followers
// router.get(
//   "/:userId/followers",
//   passport.authenticate("jwt", { session: false }),
//   getFollowers
// );

// //get list of users a specific users following

// router.get(
//   "/:userId/following",
//   passport.authenticate("jwt", { session: false }),
//   getFollowing
// );

// //get follow status
// router.get(
//   "/:userId/followStatus",
//   passport.authenticate("jwt", { session: false }),
//   getFollowStatus
// );

// // Add more routes for other follow-related actions

// module.exports = router;
