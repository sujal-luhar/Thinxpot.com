import React, { useEffect, useState } from "react";
import api from "../../api/axios";
import PostSingle from "./PostSingle";

function PostList({ fullname, username }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (!loading) {
      setLoading(true);
      api
        .get("/api/posts/homepage")
        .then((response) => {
          if (response.status === 203) {
            console.log("response", response);
            setPosts(response.data?.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
      setLoading(false);
    }
  }, []);
  return (
    <div>
      {posts.length > 0
        ? posts.map((post) => (
            <PostSingle
              key={post._id}
              postId={post._id}
              username={username}
              fullname={fullname}
            />
          ))
        : loading && <div>Loading...</div>}
    </div>
  );
}

export default PostList;
