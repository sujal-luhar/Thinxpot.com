const express = require('express');
const router = express.Router();
const followController = require('../controllers/followController');

// Define routes that use controller functions
router.post('/create', followController.createFollow);
router.delete('/remove', followController.removeFollow);
router.get('/researcher/:researcherId/followers', followController.getFollowersForResearcher);
// Add more routes for other follow-related actions

module.exports = router;
