import React, { useEffect, useState } from "react";
import PostSingle from "../Posts/PostSingle";
import api from "../../api/axios";
import { useParams } from "react-router-dom";

function ProfileLikes() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [likedBy, setLikedBy] = useState();
  const user = useParams();
  const userId = user.id;
  useEffect(() => {
    if (!loading) {
      setLoading(true);
      try {
        api
          .get(`/api/users/likes/${userId}`)
          .then((response) => {
            if (response.status === 201) {
              setPosts(response.data?.data?.data);
              setLikedBy(response?.data?.data?.likedBy);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.error("Error checking like status:", error);
      }
    }
    setLoading(false);
  }, []);
  return (
    <div>
      <div className="flex flex-col">
        <link
          rel="stylesheet"
          href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <div
          class="mt-8 flex justify-center mb-16"
          style={{ fontFamily: "Montserrat" }}
        >
          <h2 class="text-gray-800 font-bold text-xl tracking-wide">
            Likes by {likedBy ? likedBy : "@SujalLuhar"}
          </h2>
        </div>
        {console.log("Posts", posts)}
        {posts.map((post) => (
          <PostSingle
            key={post._id}
            postId={post._id}
            username={post.authorDetails.username}
            fullname={
              post.authorDetails.first_name + " " + post.authorDetails.last_name
            }
          />
        ))}
        {loading && <div>Loading...</div>}
      </div>
    </div>
  );
}

export default ProfileLikes;
