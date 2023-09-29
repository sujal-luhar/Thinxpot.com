import React, { useState } from 'react';
import api from "../../api/axios";

// function LikeButton({ postId }) {
function LikeButton() {
  const [liked, setLiked] = useState(false);

  const handleLike = (e) => {
    e.preventDefault(); 
      setLiked(!liked);
    
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
      <div class="flex-1 text-center py-2 m-2">
        <a href="#" onClick={handleLike} disabled={liked} class="w-12 mt-1 group flex items-center text-gray-700 px-3 py-2 text-base leading-6 font-medium rounded-[5px] hover:bg-gray-100 hover:text-gray-600">
          <svg class="text-center h-7 w-6" fill={liked ? '#FF6969' : 'none'} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke={liked ? '#FF6969' : 'currentColor'} viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
        </a>
      </div>
    </div>
  );
}

export default LikeButton;
