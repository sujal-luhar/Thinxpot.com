import React, { useEffect, useState } from 'react';

function PostDetail({ postId }) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Fetch the specific post by postId from your backend API
    // Example API request:
    // fetch(`/api/posts/${postId}`)
    //   .then(response => response.json())
    //   .then(data => setPost(data));
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}

export default PostDetail;
