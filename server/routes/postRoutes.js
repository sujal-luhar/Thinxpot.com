const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Define routes that use controller functions
router.post('/create', postController.createPost);
router.get('/all', postController.getAllPosts);
// Add more routes for updating and deleting posts

module.exports = router;
