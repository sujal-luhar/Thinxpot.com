import React, { useEffect, useState } from 'react';

function CommentList({ postId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch comments for the specific post from your backend API
    // Example API request:
    // fetch(`/api/posts/${postId}/comments`)
    //   .then(response => response.json())
    //   .then(data => setComments(data));
  }, [postId]);

  return (
    <div>
      <h3>Comments</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment._id}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default CommentList;
