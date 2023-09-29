import React, { useEffect, useState } from 'react'
import PostSingle from '../Posts/PostSingle';
import axios from 'axios';
import api from "../../api/axios";
import { useParams } from 'react-router-dom';


function ProfileLikes() {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        console.log(posts)

        async function fetchUserLikes() {

            if (!loading) {
                setLoading(true);

                try {
                    api
                        .get("/api/profile/likes")
                        .then((response) => {
                            if (response.status === 201) {
                                setPosts(response.data?.data);
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
        }
        fetchUserLikes();

    }, []);

    return (
        <div>
            <div className="flex flex-col">
                <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />

                <div class="mt-8 flex justify-center mb-16" style={{ fontFamily: "Montserrat" }}>
                    <h2 class="text-gray-800 font-bold text-xl tracking-wide">Likes by @SujalLuhar</h2>
                </div>
                {posts.map((post) => (
                    <PostSingle key={post.id} postId={post._id} />
                ))}
                {loading && <div>Loading...</div>}
            </div>
        </div>
    )
}

export default ProfileLikes