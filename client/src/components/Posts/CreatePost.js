import React, { useState } from 'react';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    // Add logic to send the new post data to your backend
    // Example API request:
    // fetch('/api/posts', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ title, content }),
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     // Handle successful creation, e.g., redirect to the new post's page
    //   });
  };

  return (
    <div>
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreatePost;
