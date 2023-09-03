const Follow = require('../models/Follow'); // Import the Follow model

// Controller function to create a follow relationship
exports.createFollow = (req, res) => {
  // Extract follow data from the request body
  const { follower, following } = req.body;

  // Check if the follow relationship already exists
  Follow.findOne({ follower, following }, (err, existingFollow) => {
    if (err) {
      // Handle the error
      return res.status(500).json({ error: 'Server error' });
    }

    if (existingFollow) {
      // Follow relationship already exists
      return res.status(400).json({ error: 'Follow relationship already exists' });
    }

    // Create a new Follow instance
    const newFollow = new Follow({
      follower,   // Follower's ObjectId
      following,  // Following researcher's ObjectId
    });

    // Save the follow relationship to the database
    newFollow.save((err, follow) => {
      if (err) {
        // Handle the error
        return res.status(400).json({ error: 'Failed to create follow relationship', details: err.message });
      }

      // Follow relationship created successfully, send a response
      res.status(201).json({ message: 'Follow relationship created successfully', follow });
    });
  });
};

// Controller function to remove a follow relationship
exports.removeFollow = (req, res) => {
  // Extract follow data from the request body
  const { follower, following } = req.body;

  // Find and delete the follow relationship
  Follow.findOneAndDelete({ follower, following }, (err, deletedFollow) => {
    if (err) {
      // Handle the error
      return res.status(500).json({ error: 'Server error' });
    }

    if (!deletedFollow) {
      // Follow relationship not found
      return res.status(404).json({ error: 'Follow relationship not found' });
    }

    // Follow relationship removed successfully, send a response
    res.status(200).json({ message: 'Follow relationship removed successfully' });
  });
};

// Controller function to get all followers for a researcher
exports.getFollowersForResearcher = (req, res) => {
  // Extract the researcher's ID from the request parameters
  const { researcherId } = req.params;

  // Find all followers for the specified researcher
  Follow.find({ following: researcherId }, (err, followers) => {
    if (err) {
      // Handle the error
      return res.status(500).json({ error: 'Server error' });
    }

    // Send the list of followers as a response
    res.status(200).json(followers);
  });
};

// Add more controller functions for additional follow-related actions as needed
