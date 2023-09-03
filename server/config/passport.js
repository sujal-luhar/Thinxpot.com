const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/User'); // Import your User model

// Configure Passport to use the local strategy
passport.use(
  new LocalStrategy(
    {
      usernameField: 'email', // Adjust this field to match your user data
    },
    (email, password, done) => {
      // Find the user with the provided email
      User.findOne({ email }, (err, user) => {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, { message: 'User not found' });
        }
        if (!user.comparePassword(password)) {
          return done(null, false, { message: 'Incorrect password' });
        }
        // Authentication successful
        return done(null, user);
      });
    }
  )
);

// Serialize user to store in the session
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize user from the session
passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
