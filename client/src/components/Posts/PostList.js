import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostSingle from './PostSingle';

function PostList() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!loading) {
            setLoading(true);
    
    // Fetch data from the server when the component mounts
    axios.get('/api/posts/all') // Replace with your API endpoint
      .then((response) => {
        setPosts(response.data); // Update the state with the retrieved data
      })
      .catch((error) => {
        console.error(error);
      });
    }
      setLoading(false);

  }, []);

  return (
    <div>
      {posts.map((post) => (
        <PostSingle key={post.id} postId={post._id} />
      ))}
      {loading && <div>Loading...</div>}
    </div>
  );
}

export default PostList;

