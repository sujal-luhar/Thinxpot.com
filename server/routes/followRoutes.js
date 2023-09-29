const express = require('express');
const router = express.Router();
const { passport } = require("../middlewares/passport");
const { getFollowStatus, createFollow, removeFollow, getFollowers, getFollowing } = require('../controllers/followController');

// Define routes that use controller functions
router.get('/:userId/followers', passport.authenticate("jwt", { session: false }),getFollowers);
router.get('/:userId/following', passport.authenticate("jwt", { session: false }),getFollowing);
router.get('/:userId/followStatus', passport.authenticate("jwt", { session: false }), getFollowStatus);
router.post('/:userId/create', passport.authenticate("jwt", { session: false }),createFollow);
router.delete('/:userId/remove', passport.authenticate("jwt", { session: false }),removeFollow);
// Add more routes for other follow-related actions

module.exports = router;
