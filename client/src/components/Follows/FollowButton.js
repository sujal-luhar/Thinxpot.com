import React, { useState, useEffect } from 'react';
import api from "../../api/axios";
import axios from "axios";
import {
  ButtonGroup,
  Button,
  Input
} from "@material-tailwind/react";


function FollowButton({ userId }) {
  const [following, setFollowing] = useState(false);

  useEffect(() => {
    // Check if the user has already followed the user
    async function checkLikedStatus() {
      try {
        await api.get(`/api/profile/follow/${userId}/followStatus`).then((response) => {
          setFollowing(response.data);
          console.log(response.data);
        }
        );
      } catch (error) {
        console.error("Error checking follow status:", error);
      }
    }

    checkLikedStatus();
  }, [userId]);


  const handleFollow = async () => {
    setFollowing(true);
    try {
      await api.post(`/api/profile/follow/${userId}/create`)
      .then((response) => {
        console.log(response.data);
      }
      );
      setFollowing(true);
    } catch (error) {
      console.error("Error following user:", error);
    }
  };

  const handleUnfollow = async () => {
    try {
      await axios.delete(`/api/profile/follow/${userId}/remove`)
      .then((response) => {
        console.log(response.data);
      }
      );
      setFollowing(false);
    } catch (error) {
      console.error("Error Unfollowing user:", error);
    }
  };

  return (
    <div>
      {following ? (
        <Button variant="outlined" color="white" size="sm" ripple={false} className='w-auto ml-4' onClick={handleUnfollow}>Unfollow</Button>
      ) : (
        <Button variant="outlined" color="white" size="sm" ripple={false} className='w-auto ml-4' onClick={handleFollow}>Follow</Button>
      )}
    </div>
  );
}

export default FollowButton;
