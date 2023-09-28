import React, { useEffect, useState } from "react";
import api from "../../api/axios";
import PostSingle from "./PostSingle";

function PostList() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (!loading) {
      setLoading(true);
      api
        .get("/api/posts/all")
        .then((response) => {
          if (response.status === 203) {
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
        ? posts.map((post) => <PostSingle key={post._id} postId={post._id} />)
        : loading && <div>Loading...</div>}
    </div>
  );
}

export default PostList;
