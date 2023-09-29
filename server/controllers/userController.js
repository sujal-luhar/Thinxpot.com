const User = require("../models/user");
const { generateToken } = require("../utils/jwt");
const { hashPassword, comparePassword } = require("../utils/bcrypt");
const userModel = require("../models/user");
const crypto = require("crypto");
const { sendEmail } = require("../utils/mail");

// Controller function for user registration
const register = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      username,
      email,
      password,
      confirm_password,
    } = req.body;
    if (
      !(
        username &&
        email &&
        password &&
        first_name &&
        last_name &&
        confirm_password
      )
    ) {
      return res.status(400).json({
        message:
          "Bad request. Please provide necessary details for registration",
      });
    } else if (password.length < 8 || password !== confirm_password) {
      return res.status(400).json({
        message:
          "Password should be atleast 8 characters long and should match with confirm password",
      });
    }
    const checkIfAlreadyExists = await userModel.findOne({ email: email });
    if (checkIfAlreadyExists) {
      return res.status(400).json({
        message: "User with email id already exist, please try another emailId",
      });
    }
    const hashedPassword = await hashPassword(password);

    const token = crypto.randomBytes(32).toString("hex");
    const tokenExpiration = new Date(Date.now() + 10 * 60 * 1000);
    const verificationLink = `http://localhost:5000/api/users/verify?email=${email}&token=${token}`;
    const emailContent = `Click on this link to verify your email: ${verificationLink}`;
    //send verification link before this threw email to verify user by OTP.
    await sendEmail(email, "Email Verification", emailContent);
    await userModel.create({
      first_name: first_name,
      last_name: last_name,
      username: username,
      email: email,
      password: hashedPassword,
      // address: address,
      verfication_token: token,
      verfication_token_expires: tokenExpiration,
    });
    return res.status(201).json({ message: "User registered" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Oops! something went wrong   " + error });
  }
};

const verifyEmail = async (req, res) => {
  try {
    const { email, token } = req.query;
    if (!(token && email)) {
      return res.status(400).json({
        message: "Bad request. Please provide token",
      });
    }
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({
        message: "requested link is invalid",
      });
    }
    if (user["verfication_token_expires"] < new Date()) {
      return res.status(400).json({
        message:
          "Oops! Link is expired please request again to generate verification link",
      });
    }
    if (user["verfication_token"] !== token) {
      return res.status(400).json({
        message: "Invalid token",
      });
    }
    await User.findByIdAndUpdate(user._id, { isVerified: true });
    return res.status(200).json({
      message: "Your account has been activated, you can sign in now",
    });
  } catch (error) {
    return res.status(500).json({ message: "Oops! something went wrong" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      return res
        .status(400)
        .json({ error: "Bad request! please provide credentials" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (!user.isVerified) {
      return res.status(400).json({
        message:
          "Oops! Your email is not verified yet, please verify your email",
      });
    }
    const checkPassword = await comparePassword(password, user["password"]);
    if (!checkPassword) {
      return res.status(401).json({ message: "Oops! wrong password entered." });
    }
    const token = await generateToken(user._id);
    
    res.status(200).json({ message: "Login successful", token: token });
  } catch (err) {
    return res.status(500).json({ error: "Server error" });
  }
};

const logout = (req, res) => {
  // Clear any authentication-related data (e.g., JWT tokens or session data)
  // For example, if you're using JWT tokens, you can invalidate the token on the client-side by deleting it from local storage.
  // You may also clear any session data if you're using sessions.

  // Redirect the user to the login page or another appropriate page
  res.redirect("/login");
};

const edit = async (req, res) => {
  const { first_name, last_name, location, affiliation, education, bio } =
    req.body;

  // Create a new Post instance

  try {
    const newUserData = await User.findByIdAndUpdate(req.params.userId, {
      $set: {
        first_name,
        last_name,
        location,
        affiliation,
        education,
        bio, // User's ObjectId who authored the post
      },
    });
    res.status(201).json({ message: "User updated successfully", newUserData });
  } catch (err) {
    return res
      .status(400)
      .json({ error: "Failed to update user", details: err.message });
  }
};

const searchUsers = async (req, res) => {
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
      return res.status(204).json({ message: 'No users found' });
    }

    res.status(200).json({ message: "Got all users", users });
  } catch (error) {
    return res
      .status(400)
      .json({ error: "Failed to get users", details: error.message });
  }
}

const getUserData = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "Got user data", user });
  } catch (error) {
    return res
      .status(400)
      .json({ error: "Failed to get user", details: error.message });
  }
}

module.exports = { register, login, verifyEmail, logout, edit, searchUsers, getUserData };
