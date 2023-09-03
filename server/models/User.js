// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// // Define the User schema
// const userSchema = new Schema({
//   username: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   // You can add more fields as needed for user profiles
//   // For example, 'fullName', 'bio', 'avatar', etc.
// });

// // Create and export the User model
// module.exports = mongoose.model('User', userSchema);


// Compare this snippet from server/models/User.js:
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Define the User schema
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Please provide a username'],
      unique: true,
    },
    email: {
      type: String,
      required: [true, 'Please provide an email address'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      minlength: 6,
    },
  },
  { timestamps: true }
);


// Hash the password before saving the user to the database
userSchema.pre('save', function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  bcrypt.hash(this.password, 10, (err, hashedPassword) => {
    if (err) {
      return next(err);
    }

    this.password = hashedPassword;
    next();
  });
});


// Compare the provided password with the one in the database
userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};


// Generate a JWT token for authentication
userSchema.methods.generateAuthToken = function () {
  const payload = {
    userId: this._id,
    username: this.username,
    email: this.email,
  };
}


// Create and export the User model
module.exports = mongoose.model('User', userSchema);