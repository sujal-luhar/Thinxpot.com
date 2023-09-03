import React, { useEffect, useState } from 'react';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from your backend API
    // Example API request:
    // fetch('/api/posts')
    //   .then(response => response.json())
    //   .then(data => setPosts(data));
  }, []);

  return (
    <div>
      <h2>Post List</h2>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
