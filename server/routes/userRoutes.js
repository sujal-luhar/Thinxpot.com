const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); // Import the user controller

// Define routes that use controller functions 
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
// Add more routes and controllers as needed

module.exports = router;




//below code is about using passport. 

// const express = require('express');
// const router = express.Router();
// const passport = require('passport');
// const userController = require('../controllers/userController');

// // Login route
// router.post('/login', passport.authenticate('local'), (req, res) => {
//   // If authentication is successful, send a success response
//   res.status(200).json({ message: 'Login successful', user: req.user });
// });

// // Logout route
// router.get('/logout', (req, res) => {
//   req.logout();
//   // Redirect or send a response as needed
//   res.status(200).json({ message: 'Logout successful' });
// });

// // Register route
// router.post('/register', userController.registerUser); 

// module.exports = router;
















// Compare this snippet from server/models/User.js:
// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
//
// // Define the User schema
// const userSchema = new mongoose.Schema(
//   {
//     username: {
//       type: String,
//       required: [true, 'Please provide a username'],
//       unique: true,
//     },
//     email: {
//       type: String,
//       required: [true, 'Please provide an email address'],
//       unique: true,
//     },
//     password: {
//       type: String,
//       required: [true, 'Please provide a password'],
//       minlength: 6,
//     },
//   },
//   { timestamps: true }
// );
//

// // Hash the password before saving the user to the database
// userSchema.pre('save', function (next) {
//   if (!this.isModified('password')) {
//     return next();
//   }
//
//   bcrypt.hash(this.password, 10, (err, hashedPassword) => {
//     if (err) {
//       return next(err);
//     }
//
//     this.password = hashedPassword;
//     next();
//   });
// });
//

// // Compare the provided password with the one in the database
// userSchema.methods.comparePassword = function (password) {
//   return bcrypt.compareSync(password, this.password);
// };
//

// // Generate a JWT token for authentication
// userSchema.methods.generateAuthToken = function () {
//   const payload = {
//     userId: this._id,
//     username: this.username,
//     email: this.email,
//   };
//


