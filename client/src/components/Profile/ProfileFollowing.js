import React, { useState, useEffect } from "react";
import { ButtonGroup, Button, Input } from "@material-tailwind/react";
import api from "../../api/axios";

export default function ProfileFollowing() {
  const [search, setSearch] = useState("");
  const [followings, setFollowing] = useState([]);

  useEffect(() => {
    api
      .get(`/api/profile/follow/following`)
      .then((response) => {
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
      {followings.length > 0 &&
        followings.map((data) => {
          <section
            style={{ fontFamily: "Montserrat" }}
            className="flex font-medium items-center justify-center mt-8 mb-4"
            key={data.followingId._id}
          >
            <section className="w-auto flex-row flex mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">
              <div className="mt-6 w-fit mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                  className="rounded-full w-28 "
                  alt="profile picture"
                />
              </div>
              <div className="ml-3 w-auto">
                <div className="mt-8 ">
                  <h2 className="text-white font-bold text-xl tracking-wide">
                    {data.followingId.first_name +
                      " " +
                      data.followingId.last_name}
                  </h2>
                </div>
                <div className="text-sm leading-normal mt-0 mb-2 text-gray-400 font-bold uppercase">
                  <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-400"></i>
                  {data.followingId.location
                    ? data.followingId.location
                    : "Los Angeles, California"}
                </div>
                <div className="mb-2 text-gray-600">
                  <i className="fas fa-briefcase mr-2 text-lg text-gray-400"></i>
                  {data.followingId.profession
                    ? data.followingId.profession
                    : "CEO - Creative Luhar Officer"}
                </div>
                <div className="mb-2 text-gray-600">
                  <i className="fas fa-university mr-2 text-lg text-gray-400"></i>
                  {data.followingId.education
                    ? data.followingId.education
                    : "University of Oxford - Computer Science"}
                </div>
              </div>
              <div className="flex my-2 w-auto flex-col">
                <ButtonGroup
                  className="flex-wrap w-auto"
                  variant="outlined"
                  ripple={false}
                  color="white"
                  size="sm"
                >
                  <Button className="w-auto">View</Button>
                  <Button className="w-auto">Follow</Button>
                </ButtonGroup>
              </div>
            </section>
          </section>;
        })}
    </div>
  );
}
