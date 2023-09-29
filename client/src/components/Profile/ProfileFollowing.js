import React, { useState, useEffect } from "react";
import { ButtonGroup, Button, Input } from "@material-tailwind/react";
import api from "../../api/axios";
import ProfileCard from "../connect/ProfileCard";

export default function ProfileFollowing() {
  const [search, setSearch] = useState("");
  const [followings, setFollowing] = useState([]);

  useEffect(() => {
    api
      .get(`/api/profile/follow/following`)
      .then((response) => {
        console.log(response.data?.data);
        setFollowing(response.data?.data);
      })
      .catch((error) => console.error(error));
  }, []);
  const handleSearch = () => {};

  return (
    <div className="flex flex-col">
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <div
        class="mt-8 flex justify-center"
        style={{ fontFamily: "Montserrat" }}
      >
        <h2 class="text-gray-800 font-bold text-xl tracking-wide">
          @SujalLuhar is Following ...
        </h2>
      </div>

      <form className="mx-32 flex font-medium items-center justify-center mt-8 mb-4 gap-3">
        <Input
          size="lg"
          label="Search by Name or Username"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button ripple={false} onClick={handleSearch}>
          Search
        </Button>
      </form>
      <div className="mx-32 mt-4">
          {followings.map((user) => (
            <ProfileCard key={user._id} user={user} />
          ))}
        </div>
    </div>
  );
}
