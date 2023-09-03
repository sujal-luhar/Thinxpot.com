import React, { useState } from 'react';

function FollowButton({ userId }) {
  const [following, setFollowing] = useState(false);

  const handleFollow = () => {
    // Add logic to follow/unfollow the user with userId in your backend
    // Example API request:
    // fetch(`/api/users/${userId}/follow`, {
    //   method: following ? 'DELETE' : 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    //   .then(response => {
    //     if (response.status === 200) {
    //       setFollowing(!following);
    //     }
    //   });
  };

  return (
    <div>
      <button onClick={handleFollow}>
        {following ? 'Unfollow' : 'Follow'}
      </button>
    </div>
  );
}

export default FollowButton;
