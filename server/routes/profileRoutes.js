const express = require("express");
const app = express();
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

app.use("/follow", require("../routes/followRoutes"));

module.exports = router;
