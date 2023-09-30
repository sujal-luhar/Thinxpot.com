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
      _id: x.followerId._id,
      followingId: x.followerId,
      username: x.followerId.username,
      affiliation: x.followerId.affiliation,
      education: x.followerId.education,
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
      "username first_name last_name education location affiliation _id"
    );
    const data = followList.map((x) => ({
      _id: x.followingId._id,
      followingId: x.followingId,
      username: x.followingId.username,
      affiliation: x.followingId.affiliation,
      education: x.followingId.education,
      first_name: x.followingId.first_name,
      last_name: x.followingId.last_name,
      location: x.followingId.location,
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

const getFollowersCount = async (req, res) => {
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
      _id: x.followerId._id,
      followingId: x.followerId,
      username: x.followerId.username,
      affiliation: x.followerId.affiliation,
      education: x.followerId.education,
      first_name: x.followerId.first_name,
      last_name: x.followerId.last_name,
      location: x.followerId.location,
    }));
    if (followList.length === 0) {
      res.status(200).end({ message: "You have zero followers" });
    }
    res
      .status(201)
      .json({ message: "Fetched Followers", data: followList.length });
  } catch (error) {
    return res
      .status(400)
      .json({ error: "Failed to fetch Followers", details: error.message });
  }
};

const searchFollowing = async (req, res) => {
  try {
    const { search } = req.query;

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
      _id: x.followerId._id,
      followingId: x.followerId,
      username: x.followerId.username,
      affiliation: x.followerId.affiliation,
      education: x.followerId.education,
      first_name: x.followerId.first_name,
      last_name: x.followerId.last_name,
      location: x.followerId.location,
    }));
    if (followList.length === 0) {
      res.status(200).end({ message: "You have zero followers" });
    }

    const following = data.filter({
      $or: [
        { first_name: { $regex: search, $options: "i" } },
        { last_name: { $regex: search, $options: "i" } },
        { username: { $regex: search, $options: "i" } },
      ],
    });

    if (users.length === 0) {
      return res.status(204).json({ message: "No users found" });
    }

    res.status(200).json({ message: "Got all users", data: following });
  } catch (error) {
    return res
      .status(400)
      .json({ error: "Failed to get users", details: error.message });
  }
};

const searchFollowers = async (req, res) => {
  try {
    const { search } = req.query;
    const users = await User.find({
      $or: [
        { first_name: { $regex: search, $options: "i" } },
        { last_name: { $regex: search, $options: "i" } },
        { username: { $regex: search, $options: "i" } },
      ],
    });

    if (users.length === 0) {
      return res.status(204).json({ message: "No users found" });
    }

    res.status(200).json({ message: "Got all users", users });
  } catch (error) {
    return res
      .status(400)
      .json({ error: "Failed to get users", details: error.message });
  }
};

module.exports = {
  getFollowStatus,
  createFollow,
  removeFollow,
  getFollowers,
  getFollowing,
  getFollowersCount,
  searchFollowing,
  searchFollowers,
};
