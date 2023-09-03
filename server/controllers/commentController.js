const Comment = require('../models/Comment'); // Import the Comment model

// Controller function to create a new comment
exports.createComment = (req, res) => {
  // Extract comment data from the request body
  const { text, author, post } = req.body;

  // Create a new Comment instance
  const newComment = new Comment({
    text,
    author, // User's ObjectId who authored the comment
    post,   // Post's ObjectId to which the comment belongs
  });

  // Save the comment to the database
  newComment.save((err, comment) => {
    if (err) {
      // Handle the error
      return res.status(400).json({ error: 'Failed to create comment', details: err.message });
    }

    // Comment created successfully, send a response
    res.status(201).json({ message: 'Comment created successfully', comment });
  });
};

// Controller function to get all comments for a post
exports.getCommentsForPost = (req, res) => {
  // Extract the post ID from the request parameters
  const { postId } = req.params;

  // Find all comments for the specified post
  Comment.find({ post: postId }, (err, comments) => {
    if (err) {
      // Handle the error
      return res.status(500).json({ error: 'Server error' });
    }

    // Send the list of comments as a response
    res.status(200).json(comments);
  });
};

// Add more controller functions for updating and deleting comments as needed
