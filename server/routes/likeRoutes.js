const express = require('express');
const router = express.Router();
const likeController = require('../controllers/likeController');

// Define routes that use controller functions
router.post('/create', likeController.createLike);
router.delete('/remove', likeController.removeLike);
router.get('/post/:postId', likeController.getLikesForPost);
// Add more routes for other like-related actions

module.exports = router;
