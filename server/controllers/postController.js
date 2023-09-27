const Post = require("../models/post");

exports.createPost = async (req, res) => {
  const { title, subject, content, pdfLink, author } = req.body;

  // Create a new Post instance
  const newPost = new Post({
    title,
    subject,
    content,
    pdfLink,
    author, // User's ObjectId who authored the post
  });

  try {
    const post = await newPost.save();

    res.status(201).json({ message: "Post created successfully", post });
  }
  catch (err) {
    return res
      .status(400)
      .json({ error: "Failed to create post", details: err.message });
  }

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
