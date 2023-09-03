const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Post schema
const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String, 
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User', // This references the User model
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // You can add more fields, like tags or attachments, as needed
});

// Create and export the Post model
module.exports = mongoose.model('Post', postSchema);
