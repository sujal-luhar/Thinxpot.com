const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the User schema
const userSchema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
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
    affiliation: {
      type: String,
    },
    education: {
      type: String,
    },
    bio: {
      type: String,
    },
    profilePhoto: {
      type: String,
    },
    address: {
      type: String,
    },
    profile: {
      type: String,
    },
    location: {
      type: String,
    },
    verfication_token: {
      type: String,
    },
    verfication_token_expires: {
      type: Date,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Create and export the User model
module.exports = mongoose.model("User", userSchema);
