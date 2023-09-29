const Follow = require("../models/follow"); // Import the Follow model

// Controller function to create a follow relationship

const getFollowStatus = async (req, res) => {
  try {
    const followingId = req.params.userId;
    const followerId = req.user._id;

    if (!followingId || !followerId) {
      return {
        status: 400,
        message: "Invalid request, it requires followingId and followerId",
      };
    }
    const follow = await Follow.findOne({ followerId : followerId, followingId : followingId });

    const followStatus = follow ? true : false;
    res.status(203).json({ message: "Got like status", data: followStatus });
  } catch (error) {
    return res
      .status(400)
      .json({ error: "Failed to get like status", details: error.message });
  }

}

const createFollow = async (req, res) => {
  try {
    const followingId = req.params.userId;
    const followerId = req.user._id;

    if (!followingId || !followerId) {
      return {
        status: 400,
        message: "Invalid request, it requires followingId and followerId",
      };
    }
   
    const follow = new Follow({ followerId : followerId, followingId : followingId });
    await follow.save();

    res.status(201).json({ message: "Post liked successfully", follow });
  } catch (error) {
    return res
      .status(400)
      .json({ error: "Failed to like post", details: error.message });
  }
};

const removeFollow = async (req, res) => {
  try {
    const followingId = req.params.userId;
    const followerId = req.user._id;

    if (!followingId || !followerId) {
      return {
        status: 400,
        message: "Invalid request, it requires followingId and followerId",
      };
    }
    
    const follow = await Follow.deleteOne({ followerId : followerId, followingId : followingId })

    // if (!follow) {
    //   return {
    //     status: 404,
    //     message: "Requested post not found",
    //   };
    // }
    
    res.status(201).json({ message: "Post unliked successfully", follow });
  } catch (error) {
    return res
      .status(400)
      .json({ error: "Failed to unlike post", details: error.message });
  }
}

const getFollowers = async (req, res) => {
  try{
  const followingId = req.user._id

  if (!followingId) {
    return {
      status: 400,
      message: "Invalid request, it requires followingId",
    };
  }

  const follow = await Follow.find({ followingId : followingId });

  if (!follow) {
    return {
      status: 404,
      message: "Requested Followers not found",
    };
  }

  res.status(201).json({ message: "Fetched Followers", follow });

}
catch (error){
  return res
  .status(400)
  .json({ error: "Failed to fetch Followers", details: error.message });
}

}

const getFollowing = async (req, res) => {
  try{
    const followerId = req.user._id
  
    if (!followerId) {
      return {
        status: 400,
        message: "Invalid request, it requires followingId",
      };
    }
  
    const follow = await Follow.find({ followerId : followerId });
  
    if (!follow) {
      return {
        status: 404,
        message: "Requested users you following not found",
      };
    }
  
    res.status(201).json({ message: "Fetched Following", follow });
  
  }
  catch (error){
    return res
    .status(400)
    .json({ error: "Failed to fetch users you following", details: error.message });
  }
}

module.exports = { getFollowStatus, createFollow, removeFollow, getFollowers, getFollowing };