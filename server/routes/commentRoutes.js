const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Define routes that use controller functions
router.post('/create', commentController.createComment);
router.delete('/remove', commentController.removeComment);
router.get('/post/:postId', commentController.getCommentsForPost);
// Add more routes for other comment-related action

module.exports = router;
