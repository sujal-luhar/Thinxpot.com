const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');

// Define routes that use controller functions
router.post('/createOrUpdate', profileController.createOrUpdateProfile);
router.get('/user/:userId', profileController.getProfile);
// Add more routes for other profile-related actions

module.exports = router;
