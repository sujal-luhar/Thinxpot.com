// uploadMiddleware.js

const multer = require('multer');

// Define storage settings for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Specify the directory where uploaded files will be stored
    cb(null, 'uploads/'); // You can create an 'uploads' directory in your project root
  },
  filename: (req, file, cb) => {
    // Set the filename of the uploaded file
    cb(null, Date.now() + '-' + file.originalname);
  },
});

// Create a Multer instance with the specified storage settings
const upload = multer({ storage });

module.exports = upload;
