const express = require("express");
const router = express.Router();
const {
  createPost,
  getAllPostsOfSingleUser,
  getPostsById,
} = require("../controllers/postController");
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
module.exports = router;
