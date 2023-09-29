import React, { useState, useEffect } from "react";
import api from "../../api/axios";
import { Button } from "@material-tailwind/react";

function FollowButtonProfile({ userId }) {
  const [following, setFollowing] = useState(false);
  useEffect(() => {
    // Check if the user has already followed the user
    try {
      api.get(`/api/profile/follow/${userId}/followStatus`).then((response) => {
        setFollowing(response.data?.data);
      });
    } catch (error) {
      console.error("Error checking follow status:", error);
    }
  }, [setFollowing]);

  const handleFollow = async () => {
    try {
      await api
        .post(`/api/profile/follow/${userId}/create`)
        .then((response) => {
          console.log(response.data);
        });
      setFollowing(true);
    } catch (error) {
      console.error("Error following user:", error);
    }
  };

  const handleUnfollow = async () => {
    try {
      await api
        .delete(`/api/profile/follow/${userId}/remove`)
        .then((response) => {
          console.log(response.data);
        });
      setFollowing(false);
    } catch (error) {
      console.error("Error Unfollowing user:", error);
    }
  };
  console.log("following", following);
  return (
    <div>
      {following ? (
        <Button
        className="bg-black hover:bg-gray-900 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={handleUnfollow}
      >
        Unfollow
      </Button>
      ) : (
        <Button
        className="bg-black hover:bg-gray-900 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={handleFollow}
      >
        Follow
      </Button>
      )}
    </div>
  );
}

export default FollowButtonProfile;
