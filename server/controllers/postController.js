const Post = require('../models/Post'); // Import the Post model

// Controller function to create a new post
exports.createPost = (req, res) => {
  // Extract post data from the request body
  const { title, content, author } = req.body;

  // Create a new Post instance
  const newPost = new Post({
    title,
    content,
    author, // User's ObjectId who authored the post
  });

  // Save the post to the database
  newPost.save((err, post) => {
    if (err) {
      // Handle the error
      return res.status(400).json({ error: 'Failed to create post', details: err.message });
    }

    // Post created successfully, send a response
    res.status(201).json({ message: 'Post created successfully', post });
  });
};

// Controller function to get all posts
exports.getAllPosts = (req, res) => {
  Post.find({}, (err, posts) => {
    if (err) {
      // Handle the error
      return res.status(500).json({ error: 'Server error' });
    }

    // Send the list of posts as a response
    res.status(200).json(posts);
  });
};

// Add more controller functions for updating and deleting posts as needed
