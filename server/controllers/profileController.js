const Profile = require('../models/Profile'); // Import the Profile model

// Controller function to create or update a user's profile
exports.createOrUpdateProfile = (req, res) => {
  // Extract profile data from the request body
  const { user, bio, website, affiliation } = req.body;

  // Check if the user already has a profile
  Profile.findOne({ user }, (err, profile) => {
    if (err) {
      // Handle the error
      return res.status(500).json({ error: 'Server error' });
    }

    // If a profile exists, update it; otherwise, create a new profile
    if (profile) {
      profile.bio = bio;
      profile.website = website;
      profile.affiliation = affiliation;

      profile.save((err, updatedProfile) => {
        if (err) {
          // Handle the error
          return res.status(400).json({ error: 'Failed to update profile', details: err.message });
        }

        // Profile updated successfully, send a response
        res.status(200).json({ message: 'Profile updated successfully', profile: updatedProfile });
      });
    } else {
      const newProfile = new Profile({
        user,
        bio,
        website,
        affiliation,
      });

      newProfile.save((err, profile) => {
        if (err) {
          // Handle the error
          return res.status(400).json({ error: 'Failed to create profile', details: err.message });
        }

        // Profile created successfully, send a response
        res.status(201).json({ message: 'Profile created successfully', profile });
      });
    }
  });
};

// Controller function to get a user's profile
exports.getProfile = (req, res) => {
  // Extract the user ID from the request parameters
  const { userId } = req.params;

  // Find the user's profile by their ID
  Profile.findOne({ user: userId }, (err, profile) => {
    if (err) {
      // Handle the error
      return res.status(500).json({ error: 'Server error' });
    }

    if (!profile) {
      // Profile not found
      return res.status(404).json({ error: 'Profile not found' });
    }

    // Send the user's profile as a response
    res.status(200).json(profile);
  });
};

// Add more controller functions for other profile-related actions
