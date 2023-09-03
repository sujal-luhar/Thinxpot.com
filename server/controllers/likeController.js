const Like = require('../models/Like'); // Import the Like model

// Controller function to create a new like
exports.createLike = (req, res) => {
  // Extract like data from the request body
  const { user, post } = req.body;

  // Check if the user has already liked the post
  Like.findOne({ user, post }, (err, existingLike) => {
    if (err) {
      // Handle the error
      return res.status(500).json({ error: 'Server error' });
    }

    if (existingLike) {
      // User has already liked this post
      return res.status(400).json({ error: 'User has already liked this post' });
    }

    // Create a new Like instance
    const newLike = new Like({
      user, // User's ObjectId who liked the post
      post, // Post's ObjectId that was liked
    });

    // Save the like to the database
    newLike.save((err, like) => {
      if (err) {
        // Handle the error
        return res.status(400).json({ error: 'Failed to create like', details: err.message });
      }

      // Like created successfully, send a response
      res.status(201).json({ message: 'Like created successfully', like });
    });
  });
};

// Controller function to remove a like
exports.removeLike = (req, res) => {
  // Extract like data from the request body
  const { user, post } = req.body;

  // Find and delete the user's like for the post
  Like.findOneAndDelete({ user, post }, (err, deletedLike) => {
    if (err) {
      // Handle the error
      return res.status(500).json({ error: 'Server error' });
    }

    if (!deletedLike) {
      // Like not found
      return res.status(404).json({ error: 'Like not found' });
    }

    // Like removed successfully, send a response
    res.status(200).json({ message: 'Like removed successfully' });
  });
};

// Controller function to get all likes for a post
exports.getLikesForPost = (req, res) => {
  // Extract the post ID from the request parameters
  const { postId } = req.params;

  // Find all likes for the specified post
  Like.find({ post: postId }, (err, likes) => {
    if (err) {
      // Handle the error
      return res.status(500).json({ error: 'Server error' });
    }

    // Send the list of likes as a response
    res.status(200).json(likes);
  });
};

// Add more controller functions for additional like-related actions as needed
