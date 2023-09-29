import React, { useState } from "react";
import {
  ButtonGroup,
  Button,
  Input
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import api from "../../api/axios";


export default function ProfileCard({ user }) {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleToggle = () => {
    setIsFollowing(!isFollowing); // Toggle the state
  };
  //handling user fetching
  return (
    <div className="flex flex-col">
      {/* <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css" /> */}
      <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />

      <section style={{ fontFamily: "Montserrat" }} class="flex font-medium items-center justify-center mt-8 mb-4">
        <section className="w-[900px] flex-row flex mx-auto rounded-2xl px-8 py-6 bg-[#0b1b2c] shadow-lg" style={{backgroundColor:isFollowing?'#0b1b2c':'#152a41'}}>
          <div class="mt-6 w-fit">
            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" class="rounded-full w-28 " alt="profile picture" />
          </div>
          <div className="flex w-full flex-row justify-between">
          <div className="ml-3 w-auto">
            <div class="mt-8 ">
              <h2 class="text-white font-bold text-xl tracking-wide">{user.first_name} {user.last_name}</h2>
            </div>
            <div className="text-sm leading-normal mt-0 mb-2 text-gray-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-400"></i>
              {user.location ? user.location : '--' }
            </div>
            <div className="mb-2 text-gray-600">
              <i className="fas fa-briefcase mr-2 text-lg text-gray-400"></i>
              {user.affiliation ? user.affiliation : '--' }
            </div>
            <div className="mb-2 text-gray-600">
              <i className="fas fa-university mr-2 text-lg text-gray-400"></i>
              {user.education ? user.education : '--' }
            </div>
          </div>
            <div className="flex my-2 w-auto flex-col">
              <div className="flex-wrap w-auto" variant="outlined"   >
                <Link to={`/user/${user._id}`}><Button variant="outlined" color="white" size="sm" ripple={false} className='w-auto'>View</Button></Link>
                <Button variant="outlined" color="white" size="sm" ripple={false} className='w-auto ml-4' onClick={handleToggle}>{isFollowing ? 'Unfollow' : 'Follow'}</Button>
              </div>
            </div>
          </div>
        </section>
      </section>

    </div>
  );
}