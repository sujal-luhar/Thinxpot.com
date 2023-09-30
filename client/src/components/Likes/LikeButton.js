import React, { useState, useEffect } from "react";
import api from "../../api/axios";

// function LikeButton() {
function LikeButton({ postId }) {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    // Check if the user has already liked the post
    async function checkLikedStatus() {
      try {
        const response = await api.get(`/api/posts/${postId}/likeStatus`);
        setLiked(response.data.data);
      } catch (error) {
        console.error("Error checking like status:", error);
      }
    }

    checkLikedStatus();
  }, [postId]);

  const handleLike = async (e) => {
    e.preventDefault();
    try {
      await api.post(`/api/posts/${postId}/likes`);
      setLiked(true);
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };

  const handleUnlike = async () => {
    try {
      await api.delete(`/api/posts/${postId}/likes`);
      setLiked(false);
    } catch (error) {
      console.error("Error unliking post:", error);
    }
  };
  return (
    <div>
      {liked ? (
        <div class="flex-1 text-center py-2 m-2">
          <a
            href="#"
            onClick={handleUnlike}
            disabled={liked}
            class="w-12 mt-1 group flex items-center text-gray-700 px-3 py-2 text-base leading-6 font-medium rounded-[5px] hover:bg-gray-100 hover:text-gray-600"
          >
            <svg
              class="text-center h-7 w-6"
              fill="#FF6969"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              stroke="#FF6969"
              viewBox="0 0 24 24"
            >
              <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
          </a>
        </div>
      ) : (
        <div class="flex-1 text-center py-2 m-2">
          <a
            href="#"
            onClick={handleLike}
            disabled={liked}
            class="w-12 mt-1 group flex items-center text-gray-700 px-3 py-2 text-base leading-6 font-medium rounded-[5px] hover:bg-gray-100 hover:text-gray-600"
          >
            <svg
              class="text-center h-7 w-6"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
          </a>
        </div>
      )}
    </div>
  );
}

export default LikeButton;
