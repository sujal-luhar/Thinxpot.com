// import React, { useEffect, useState } from 'react';

// function PostList() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     // Fetch posts from your backend API
//     // Example API request:
//     // fetch('/api/posts')
//     //   .then(response => response.json())
//     //   .then(data => setPosts(data));
//   }, []);

//   return (
//     <div>
//       <h2>Post List</h2>
//       <ul>
//         {posts.map((post) => (
//           <li key={post._id}>{post.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default PostList;

import React, { useEffect, useState } from 'react';
import PostSingle from './PostSingle';

function PostList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    // Function to fetch more posts (you'll need to implement this)
    const fetchMorePosts = async () => {
        if (!loading) {
            setLoading(true);

            // Make an API request to fetch more posts
            try {
                // Replace this with your actual API request
                const response = await fetch('/api/posts/all'); // Example endpoint
                const data = await response.json();
                setPosts((prevPosts) => [...prevPosts, ...data]); // Append new posts to the existing ones
            } catch (error) {
                console.error('Error fetching posts:', error);
            }

            setLoading(false);
        }
    };

    // Use useEffect to trigger fetchMorePosts when the user scrolls near the bottom
    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY;

            if (windowHeight + scrollTop >= documentHeight - 200) {
                fetchMorePosts();
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            {posts.map((post) => (
                <PostSingle key={post.id} postId={post.id} />
            ))}
            {loading && <div>Loading...</div>}
        </div>
    );
}

export default PostList;
