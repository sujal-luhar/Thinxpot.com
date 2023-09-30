import React, { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import EditProfile from "./EditProfile";
import PostSingle from "../Posts/PostSingle";
import PostList from "../Posts/PostList";
import { useParams, Link } from "react-router-dom";
import api from "../../api/axios";
import FollowButtonProfile from "../Follows/FollowButtonProfile";

function UserProfile() {
  const [userProfile, setUserProfile] = useState(null);
  const [isFollowing, setIsFollowing] = useState(false);
  let user = useParams();
  const userId = user.id;
  useEffect(() => {
    api
      .get(`/api/users/${userId}`)
      .then((response) => {
        if (response.status === 200) {
          const userProfileData = response.data.user;
          setUserProfile(userProfileData);
        } else {
          console.error("Failed to fetch user profile data");
        }
      })
      .catch((error) => {
        console.error("Error fetching user profile data:", error);
      });
  }, []);

  if (!userProfile) {
    return <div>Loading...</div>;
  }

  const handleToggle = () => {
    setIsFollowing(!isFollowing); // Toggle the state
  };

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
      />
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      />
      <main className="profile-page">
        <section className="block h-screen bg-blueGray-200">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80)",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ('0px')" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <Button
                        className="bg-black hover:bg-gray-900 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={handleToggle}
                      >
                        {isFollowing ? "Unfollow" : "Follow"}
                      </Button>
                      <EditProfile />
                    <div className="flex flex-row justify-end py-6 px-3 mt-32 sm:mt-0">
                      <FollowButtonProfile userId={userId}/>
                      <EditProfile userId={userId} />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          22
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Followers
                        </span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          10
                        </span>
                        <span className="text-sm text-blueGray-400">Posts</span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          89
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Comments
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal text-blueGray-700 mb-0.25">
                    {userProfile.first_name} {userProfile.last_name}
                  </h3>
                  <div className="text-blueGray-400 mb-4">
                    @{userProfile.username}
                  </div>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    {userProfile.location && (
                      <>
                        <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                        {userProfile.location}
                      </>
                    )}
                  </div>
                  <div className="mb-2 text-blueGray-600 mt-10">
                    {userProfile.affiliation && (
                      <>
                        <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                        {userProfile.affiliation}
                      </>
                    )}
                  </div>
                  <div className="mb-2 text-blueGray-600">
                    {userProfile.education && (
                      <>
                        <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                        {userProfile.education}
                      </>
                    )}
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      {userProfile.bio && (
                        <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                          {userProfile.bio}
                        </p>
                      )}
                      {/* <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        An artist of considerable range, Jenna the name taken by
                        Melbourne-raised, Brooklyn-based Nick Murphy writes,
                        performs and records all of his own music, giving it a
                        warm, intimate feel with a solid groove structure. An
                        artist of considerable range.
                      </p> */}
                    </div>
                  </div>
                  <div className="flex w-full flex-col fullwidth flex-wrap justify-center gap-4">
                    <div className="flex-wrap w-auto gap-4 flex justify-center">
                      <Link to={`/user/likes/${userId}`}>
                        <Button size="sm" className="w-40">
                          Likes
                        </Button>
                      </Link>
                      <a href="/user/Followers">
                        <Button size="sm" className="w-40">
                          Followers
                        </Button>
                      </a>
                      <a href="/user/Following">
                        <Button size="sm" className="w-40">
                          Following
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <hr class="border-gray-400"></hr>
              <div className="px-6">
                <PostList
                  fullname={
                    userProfile.first_name + " " + userProfile.last_name
                  }
                  username={userProfile.username}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Here we need to put all the papers uploaded and follower's list */}
      </main>
    </div>
  );
}

export default UserProfile;
