const express = require('express');
// const session = require('express-session');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser'); // You might need to install this middleware
// const passport = require('passport');

const app = express();

// Define middleware
app.use(express.json()); // Parse JSON request bodies
app.use(cors()); // Enable CORS for all routes (you can configure this as needed)
app.use(bodyParser.urlencoded({ extended: true })); // You might need this for form data parsing
// // Set up Express sessions
// app.use(
//   session({
//     secret: 'your-secret-key', // Replace with your session secret
//     resave: false,
//     saveUninitialized: true,
//   })
// );
// // Initialize Passport
// app.use(passport.initialize());
// app.use(passport.session());
    
    
// Define your API routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/upload', require('./routes/uploadRoutes'));
app.use('/api/posts', require('./routes/postRoutes'));
app.use('/api/profiles', require('./routes/profileRoutes'));
app.use('/api/likes', require('./routes/likeRoutes'));
app.use('/api/follows', require('./routes/followRoutes'));
app.use('/api/comments', require('./routes/commentRoutes'));


// Define a default route
app.get('/', (req, res) => {
  res.send('Welcome to the Research Collaboration API!');
});

// Define your server port
const PORT = 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}. http://localhost:${PORT}`);
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/my_database').then(() =>{}).catch((err) => {
    if (err) {
      console.error('Error connecting to MongoDB:', err);
    } else {
      console.log('Connected to MongoDB');
    }
  }
);
