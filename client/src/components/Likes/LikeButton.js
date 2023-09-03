import React, { useState } from 'react';

function LikeButton({ postId }) {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    // Add logic to send a like for the post to your backend
    // Example API request:
    // fetch(`/api/posts/${postId}/like`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    //   .then(response => {
    //     if (response.status === 200) {
    //       setLiked(true);
    //     }
    //   });
  };

  return (
    <div>
      <button onClick={handleLike} disabled={liked}>
        {liked ? 'Liked' : 'Like'}
      </button>
    </div>
  );
}

export default LikeButton;
