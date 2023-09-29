const express = require("express");
const router = express.Router();
const {
  createPost,
  getAllPostsOfSingleUser,
  getPostsById,
} = require("../controllers/postController");
const {
  checkLikeStatus, 
  createLike,
  removeLike,
} = require("../controllers/likeController")

const { passport } = require("../middlewares/passport");
const { create } = require("../models/user");

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



module.exports = router;
