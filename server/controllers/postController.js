const Post = require("../models/post");

exports.createPost = (req, res) => {
  const { title, content, author } = req.body;

  // Create a new Post instance
  const newPost = new Post({
    title,
    content,
    author, // User's ObjectId who authored the post
  });

  newPost.save((err, post) => {
    if (err) {
      return res
        .status(400)
        .json({ error: "Failed to create post", details: err.message });
    }

    res.status(201).json({ message: "Post created successfully", post });
  });
};

exports.getAllPosts = (req, res) => {
  Post.find({}, (err, posts) => {
    if (err) {
      return res.status(500).json({ error: "Server error" });
    }

    res.status(200).json(posts);
  });
};

// Add more controller functions for updating and deleting posts as needed
