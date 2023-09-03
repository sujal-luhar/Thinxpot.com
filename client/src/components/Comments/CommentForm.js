import React, { useState } from 'react';

function CommentForm({ postId }) {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    // Add logic to send the new comment to your backend
    // Example API request:
    // fetch(`/api/posts/${postId}/comments`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ text }),
    // })
    //   .then(response => {
    //     if (response.status === 200) {
    //       // Handle successful comment submission
    //       setText('');
    //     }
    //   });
  };

  return (
    <div>
      <h3>Add a Comment</h3>
      <textarea
        placeholder="Write a comment..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default CommentForm;
