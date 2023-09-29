const Post = require("../models/post");

const createPost = async (req, res) => {
  try {
    const { title, subject, content, pdfLink, authorId } = req.body.data;
    if (!(title && subject && content && pdfLink && authorId)) {
      return res
        .status(400)
        .json({ error: "Please enter all fields to create post" });
    }
    // Create a new Post instance
    const post = {
      title: title,
      subject: subject,
      content: content,
      pdfLink: pdfLink,
      authorId: req.user._id,
    };
    await Post.create(post);
    res.status(201).json({ message: "Post created successfully", post });
  } catch (err) {
    return res
      .status(400)
      .json({ error: "Failed to create post", details: err.message });
  }
};

const getAllPostsOfSingleUser = async (req, res) => {
  try {
    const user = req.user;
    const findAllPosts = await Post.find({ authorId: user._id }).sort({createdAt: -1});
    const data = findAllPosts.map((x) => ({
      _id: x._id,
      title: x.title,
      subject: x.subject,
      content: x.content,
      pdfLink: x.pdfLink,
      authorId: x.authorId,
    }));
    res.status(203).json({ message: "Got all Posts", data: data });
  } catch (error) {
    return res
      .status(400)
      .json({ error: "Failed to get posts", details: error.message });
  }
};

const getPostsById = async (req, res) => {
  try {
    const postId = req.params.postId;
    if (!postId) {
      return {
        status: 400,
        message: "Invalid request, it requires postId",
      };
    }
    const post = await Post.findById(postId);
    if (!post) {
      return {
        status: 404,
        message: "Requested post not found",
      };
    }
    const data = {
      title: post.title,
      subject: post.subject,
      content: post.content,
      pdfLink: post.pdfLink,
      authorId: post.authorId,
      createdAt: post.createdAt,
    };
    res.status(203).json({ message: "Got single Post", data: data });
  } catch (error) {
    return res
      .status(400)
      .json({ error: "Failed to get post", details: error.message });
  }
};

const checkLikeStatus = async (req, res) => {
  try {
    const postId = req.params.postId;
    const userId = req.params.userId;
    if (!postId || !userId) {
      return {
        status: 400,
        message: "Invalid request, it requires postId and userId",
      };
    }
    const post = await Post.findById(postId);
    if (!post) {
      return {
        status: 404,
        message: "Requested post not found",
      };
    }
    const likeStatus = post.likes.includes(userId);
    res.status(203).json({ message: "Got like status", data: likeStatus });
  } catch (error) {
    return res
      .status(400)
      .json({ error: "Failed to get like status", details: error.message });
  }
};

const createLike = async (req, res) => {
  try {
    const postId = req.params.postId;
    const userId = req.body.userId;
    if (!postId || !userId) {
      return {
        status: 400,
        message: "Invalid request, it requires postId and userId",
      };
    }
   // code to make new like document in mongo db

    res.status(201).json({ message: "Post liked successfully", post });
  } catch (error) {
    return res
      .status(400)
      .json({ error: "Failed to like post", details: error.message });
  }
};

const removeLike = async (req, res) => {
  try {
    const postId = req.params.postId;
    const userId = req.params.userId;
    if (!postId || !userId) {
      return {
        status: 400,
        message: "Invalid request, it requires postId and userId",
      };
    }
    const post = await Post.findById(postId);
    if (!post) {
      return {
        status: 404,
        message: "Requested post not found",
      };
    }
    const likeStatus = post.likes.includes(userId);
    if (!likeStatus) {
      return {
        status: 400,
        message: "You have not liked this post",
      };
    }
    const index = post.likes.indexOf(userId);
    post.likes.splice(index, 1);
    await post.save();
    res.status(201).json({ message: "Post unliked successfully", post });
  } catch (error) {
    return res
      .status(400)
      .json({ error: "Failed to unlike post", details: error.message });
  }
};

module.exports = { createPost, getAllPostsOfSingleUser, getPostsById, checkLikeStatus, createLike, removeLike };
