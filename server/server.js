// Import necessary libraries and frameworks
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');

// Create an instance of Express.js
const app = express();

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded request bodies
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(cors()); // Enable CORS for cross-origin requests
app.use(passport.initialize()); // Initialize Passport for authentication

// Connect to MongoDB using Mongoose
mongoose
  .connect('mongodb://localhost/your_database', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Include passport configuration for user authentication
require('./middlewares/passport')(passport);
// // Initialize Passport
// app.use(passport.initialize());
// app.use(passport.session());

// Define your API routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/upload", require("./routes/uploadRoutes"));
app.use("/api/posts", require("./routes/postRoutes"));
app.use("/api/likes", require("./routes/likeRoutes"));
app.use("/api/follows", require("./routes/followRoutes"));
app.use("/api/comments", require("./routes/commentRoutes"));
// Add more routes as needed

// Set up a default route
app.get("/", (req, res) => {
  res.send("Welcome to the Research Collaboration API!");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

