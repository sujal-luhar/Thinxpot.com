const Like = require("../models/like");


const checkLikeStatus = async (req, res) => {
  try {
    const postId = req.params.postId;
    const userId = req.user._id;
    if (!postId || !userId) {
      return {
        status: 400,
        message: "Invalid request, it requires postId and userId",
      };
    }
    const like = await Like.findOne({ postId : postId, userId : userId });

    const likeStatus = like ? true : false;
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
    const userId = req.user._id;
    if (!postId || !userId) {
      return {
        status: 400,
        message: "Invalid request, it requires postId and userId",
      };
    }
   
    const like = await new Like({ postId: postId, userId: userId });
    await like.save();

    res.status(201).json({ message: "Post liked successfully", like });
  } catch (error) {
    return res
      .status(400)
      .json({ error: "Failed to like post", details: error.message });
  }
};

const removeLike = async (req, res) => {
  try {
    const postId = req.params.postId;
    const userId = req.user._id;
    if (!postId || !userId) {
      return {
        status: 400,
        message: "Invalid request, it requires postId and userId",
      };
    }
    const like = await Like.deleteOne({ postId: postId, userId: userId })
    if (!like) {
      return {
        status: 404,
        message: "Requested post not found",
      };
    }
    
    res.status(201).json({ message: "Post unliked successfully", like });
  } catch (error) {
    return res
      .status(400)
      .json({ error: "Failed to unlike post", details: error.message });
  }
};

const   fetchUserLikes = async (req, res) => {
  try {
    const userId = req.user._id;
    if (!userId) {
      return {
        status: 400,
        message: "Invalid request, it requires postId and userId",
      };
    }
    const likes = await Like.find({ userId: userId })

    if (!likes) {
      return {
        status: 404,
        message: "Requested posts not found",
      };
    }
    res.status(201).json({ message: "Fetched liked posts successfully", data: likes });
  } catch (error) {
    return res
      .status(400)
      .json({ error: "Failed to fetch liked post", details: error.message });
  }
}

module.exports = { checkLikeStatus, createLike, removeLike, fetchUserLikes };
