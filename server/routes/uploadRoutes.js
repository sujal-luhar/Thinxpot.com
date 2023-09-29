const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multer"); // Import the Multer middleware
const { uploadProfilePhoto } = require("../controllers/uploadController");

// Upload a research paper (example route)
// router.post('/upload', upload.single('researchPaper'), userController.uploadResearchPaper);
router.post('/ProfilePhoto', upload.single('profilePhoto'), uploadProfilePhoto);

module.exports = router;
