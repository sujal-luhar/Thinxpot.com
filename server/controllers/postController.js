const Post = require("../models/post");

exports.createPost = async (req, res) => {
  const { title, subject, content, pdfLink, authorId } = req.body;

  // Create a new Post instance 
  const newPost = new Post({
    title,
    subject,
    content,
    pdfLink,
    authorId, // User's ObjectId who authored the post
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

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt : -1 })
    res.status(200).json(posts);
  }
  catch (err) {
    return res.status(500).json({ error: err, details: err.message });
  } 
}

exports.getSinglePosts = async (req, res) => {
  const postId = req.params.id
  try {
    const post = await Post.findOne({ _id: postId })
    res.status(200).json(post);
  }
  catch (err) {
    return res.status(500).json({ error: "Server error" });
  }
};

// Add more controller functions for updating and deleting posts as needed
