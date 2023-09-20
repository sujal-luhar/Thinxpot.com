const express = require("express");
require("./config/db");
const cors = require("cors");
const uploadRoutes = require("./routes/uploadRoutes");
// const passport = require('passport');

const app = express();

// Define middleware
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/api/upload", uploadRoutes);

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

// Define a default route
app.get("/", (req, res) => {
  res.send("Welcome to the Research Collaboration API!");
});

// Define your server port
const PORT = 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}. http://localhost:${PORT}`);
});
