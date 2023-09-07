const User = require("../models/User"); // Import the User model
const { generateToken } = require("../utils/jwt");
const { hashPassword, comparePassword } = require("../utils/bcrypt");
const userModel = require("../models/User");
// Controller function for user registration

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!(username && email && password)) {
      return res.status(400).json({
        message:
          "Bad request. Please provide necessary details for registration",
      });
    }
    const checkIfAlreadyExists = await userModel.findOne({ email: email });
    if (checkIfAlreadyExists) {
      return res.status(400).json({
        message: "User with email id already exist, please try another emailId",
      });
    }
    const hashedPassword = await hashPassword(password);

    //send verification link before this threw email to verify user by OTP.
    await userModel.create({
      username: username,
      email: email,
      password: hashedPassword,
    });
    return res.status(201).json({ message: "User registered" });
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
      // User not found
      return res.status(404).json({ message: "User not found" });
    }
    const checkPassword = await comparePassword(password, user["password"]);
    if (!checkPassword) {
      return res.status(401).json({ message: "Oops! wrong password entered." });
    }
    // Generate a JWT token for authentication (if using JWT)
    const token = await generateToken(user._id);
    // Successful login, send the token as a response,
    res.status(200).json({ message: "Login successful", token: token });
  } catch (err) {
    return res.status(500).json({ error: "Server error" });
  }
};

// Function to handle research paper upload
const uploadResearchPaper = (req, res) => {
  if (!req.file) {
    // No file was uploaded
    return res.status(400).json({ error: "No file uploaded" });
  }

  // Access the uploaded file details
  const { filename, originalname } = req.file;

  // You can save the file details in the database if needed
  // Example: create a new Post and associate the file with it

  // Respond with a success message
  res
    .status(200)
    .json({ message: "File uploaded successfully", filename, originalname });
};
module.exports = { register, login, uploadResearchPaper };
