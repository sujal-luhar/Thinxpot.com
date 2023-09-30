const express = require("express");
const router = express.Router();
const {
  createPost,
  getAllPostsOfSingleUser,
  getPostsById,
  homePagePosts,
} = require("../controllers/postController");
const {
  checkLikeStatus,
  createLike,
  removeLike,
} = require("../controllers/likeController");

const { passport } = require("../middlewares/passport");

// Define routes that use controller functions
router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  createPost
);
router.get(
  "/all",
  passport.authenticate("jwt", { session: false }),
  getAllPostsOfSingleUser
);
router.get(
  "/:postId",
  passport.authenticate("jwt", { session: false }),
  getPostsById
);

// Adding more routes for other post-related actions

//Like routes
router.get(
  "/:postId/likeStatus",
  passport.authenticate("jwt", { session: false }),
  checkLikeStatus
);
router.post(
  "/:postId/likes",
  passport.authenticate("jwt", { session: false }),
  createLike
);
router.delete(
  "/:postId/likes",
  passport.authenticate("jwt", { session: false }),
  removeLike
);

router.get(
  "/homepage",
  passport.authenticate("jwt", { session: false }),
  homePagePosts
);

module.exports = router;
