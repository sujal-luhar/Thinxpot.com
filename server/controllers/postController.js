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

exports.getAllPosts = (req, res) => {
  try {
    const posts = Post.find()
    res.status(200).json(posts);
  }
  catch (err) {
    return res.status(500).json({ error: "Server error" });
  }
}

exports.getSinglePosts = async (req, res) => {
  const postId = req.params.id
  try {
    const post = Post.find({ _id: postId })
    res.status(200).json(post);
  }
  catch (err) {
    return res.status(500).json({ error: "Server error" });
  }
};

// Add more controller functions for updating and deleting posts as needed
