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
    const follow = await Follow.findOne({
      followerId: followerId,
      followingId: followingId,
    });
    console.log("Follow Found", follow);
    const followStatus = follow ? true : false;
    res.status(203).json({ message: "Got like status", data: followStatus });
  } catch (error) {
    return res
      .status(400)
      .json({ error: "Failed to get like status", details: error.message });
  }
};

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
    const existingFollow = await Follow.findOne({
      followerId: followerId,
      followingId: followingId,
    });

    if (existingFollow) {
      return res.status(400).json({ error: "Already following this user." });
    }
    await Follow.create({ followerId: followerId, followingId: followingId });

    res.status(201).json({ message: "Followed" });
  } catch (error) {
    return res
      .status(400)
      .json({ error: "Failed to follow", details: error.message });
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

    const existingFollow = await Follow.findOne({ followerId, followingId });
    if (!existingFollow) {
      return res
        .status(400)
        .json({ error: "You are not following this user." });
    }

    const follow = await Follow.deleteOne({
      followerId: followerId,
      followingId: followingId,
    });

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
};

const getFollowers = async (req, res) => {
  try {
    const followingId = req.user._id;

    if (!followingId) {
      return {
        status: 400,
        message: "Invalid request, it requires followingId",
      };
    }
    const followList = await Follow.find({ followingId: followingId }).populate(
      "followerId",
      "username first_name last_name education location affiliation"
    );
    const data = followList.map((x) => ({
      followingId: x.followingId,
      username: x.followingId.username,
      profession: x.followerId.affiliation,
      education: x.followingId.education,
      first_name: x.followerId.first_name,
      last_name: x.followerId.last_name,
      location: x.followerId.location,
    }));
    if (followList.length === 0) {
      res.status(200).end({ message: "You have zero followers" });
    }
    res.status(201).json({ message: "Fetched Followers", data: data });
  } catch (error) {
    return res
      .status(400)
      .json({ error: "Failed to fetch Followers", details: error.message });
  }
};

const getFollowing = async (req, res) => {
  try {
    const followerId = req.user._id;

    if (!followerId) {
      return {
        status: 400,
        message: "Invalid request, it requires followingId",
      };
    }

    const followList = await Follow.find({ followerId: followerId }).populate(
      "followingId",
      "username first_name last_name education location affiliation"
    );
    const data = followList.map((x) => ({
      followingId: x.followingId,
      username: x.followingId.username,
      profession: x.followerId.affiliation,
      education: x.followingId.education,
      first_name: x.followerId.first_name,
      last_name: x.followerId.last_name,
      location: x.followerId.location,
    }));

    if (followList.length === 0) {
      res.status(200).end({ message: "You are not following anyone" });
    }
    res.status(201).json({ message: "Fetched Following", data: data });
  } catch (error) {
    return res.status(400).json({
      error: "Failed to fetch users you following",
      details: error.message,
    });
  }
};

module.exports = {
  getFollowStatus,
  createFollow,
  removeFollow,
  getFollowers,
  getFollowing,
};
