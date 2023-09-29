const User = require("../models/user");

const uploadProfilePhoto = async (req, res) => {
    try {
        if (!req['selectedFile']) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        // You can access the uploaded file information in req.file
        const filePath = req.profilePhoto.path;

        // Update the user's profile photo path in the database
        const userId = req.userId; // Assuming you have user authentication in place
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }   

        user.profilePhoto = filePath;
        await user.save();

        res.status(200).json({ message: 'File uploaded and user updated successfully' });
    } catch (error) {
        console.error('Error uploading profile photo:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { uploadProfilePhoto };