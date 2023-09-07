const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the User schema
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // You can add more fields as needed for user profiles
  // For example, 'fullName', 'bio', 'avatar', etc.
});

// Create and export the User model
module.exports = mongoose.model("User", userSchema);
