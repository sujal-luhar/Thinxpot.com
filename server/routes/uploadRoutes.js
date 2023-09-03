// uploadRoutes.js

const express = require('express');
const router = express.Router();
const upload = require('../config/uploadMiddleware'); // Import the Multer middleware
const userController = require('../controllers/userController');

// Upload a research paper (example route)
router.post('/upload', upload.single('researchPaper'), userController.uploadResearchPaper);

module.exports = router;
