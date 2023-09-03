const User = require('../models/User'); // Import the User model

// Controller function for user registration
exports.registerUser = (req, res) => {
  // Extract user data from the request body
  const { username, email, password } = req.body;

  // Create a new User instance
  const newUser = new User({
    username,
    email, 
    password, // You should hash the password before storing it
  });

  // Save the user to the database
  newUser.save((err, user) => {
    if (err) {
      // Handle the error, e.g., duplicate email or validation error
      return res.status(400).json({ error: 'Registration failed', details: err.message });
    }

    // Registration successful, you can send a success response
    res.status(201).json({ message: 'Registration successful', user });
  });
};

// Controller function for user login
exports.loginUser = (req, res) => {
  // Extract user login data from the request body
  const { email, password } = req.body;

  // Find the user by email
  User.findOne({ email }, (err, user) => {
    if (err) {
      // Handle the error
      return res.status(500).json({ error: 'Server error' });
    }

    if (!user) {
      // User not found
      return res.status(404).json({ error: 'User not found' });
    }

    // Check if the provided password matches the user's password
    if (!user.comparePassword(password)) {
      return res.status(401).json({ error: 'Incorrect password' });
    }

    // Generate a JWT token for authentication (if using JWT)
    const token = user.generateAuthToken();

    // Successful login, send the token as a response
    res.status(200).json({ message: 'Login successful', token });
  });
};

// Function to handle research paper upload
exports.uploadResearchPaper = (req, res) => {
  if (!req.file) {
    // No file was uploaded
    return res.status(400).json({ error: 'No file uploaded' });
  }

  // Access the uploaded file details
  const { filename, originalname } = req.file;

  // You can save the file details in the database if needed
  // Example: create a new Post and associate the file with it

  // Respond with a success message
  res.status(200).json({ message: 'File uploaded successfully', filename, originalname });
};