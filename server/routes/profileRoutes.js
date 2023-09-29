const express = require("express");
const router = express.Router();
const {
  fetchUserLikes
} = require("../controllers/likeController");
const { passport } = require("../middlewares/passport");
const { create } = require("../models/user");

router.get(
  "/likes",
  passport.authenticate("jwt", { session: false }),
  fetchUserLikes
);


module.exports = router;
