const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    unique: true,
    required: true,
  },
  bio: {
    type: String,
    maxlength: 500, // You can set a maximum length for the bio if needed
  },
  website: {
    type: String,
  },
  affiliation: {
    type: String,
  },
  // Add more fields as needed for the user profile
});

module.exports = mongoose.model('Profile', profileSchema);