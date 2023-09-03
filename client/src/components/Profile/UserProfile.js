import React, { useEffect, useState } from 'react';

function UserProfile({ userId }) {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    // Fetch the user's profile data by userId from your backend API
    // Example API request:
    // fetch(`/api/profiles/${userId}`)
    //   .then(response => response.json())
    //   .then(data => setUserProfile(data));
  }, [userId]);

  if (!userProfile) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {userProfile.name}</p>
      <p>Email: {userProfile.email}</p>
      {/* Add more profile information */}
    </div>
  );
}

export default UserProfile;
