import React, { useState } from "react";
import {
  ButtonGroup,
  Button,
  Input
} from "@material-tailwind/react";

export default function ProfileFollowing() {
  const [search, setSearch] = useState('');

  const handleSearch = () => {
  };

  return (
    <div className="flex flex-col">
      <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />

      <div class="mt-8 flex justify-center" style={{ fontFamily: "Montserrat" }}>
              <h2 class="text-gray-800 font-bold text-xl tracking-wide">@SujalLuhar is Following ...</h2>
            </div>

      <form className="mx-32 flex font-medium items-center justify-center mt-8 mb-4 gap-3">
      <Input size="lg" label="Search by Name or Username" onChange={(e) => setSearch(e.target.value)} />
      <Button ripple={false} onClick={handleSearch}>
            Search
          </Button>
      </form>

      <section style={{ fontFamily: "Montserrat" }} class="flex font-medium items-center justify-center mt-8 mb-4">
        <section class="w-auto flex-row flex mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">
          <div class="mt-6 w-fit mx-auto">
            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" class="rounded-full w-28 " alt="profile picture" />
          </div>
          <div className="ml-3 w-auto">
            <div class="mt-8 ">
              <h2 class="text-white font-bold text-xl tracking-wide">Jonathan Smith</h2>
            </div>
            <div className="text-sm leading-normal mt-0 mb-2 text-gray-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-400"></i>
              Los Angeles, California
            </div>
            <div className="mb-2 text-gray-600">
              <i className="fas fa-briefcase mr-2 text-lg text-gray-400"></i>CEO - Creative Luhar Officer
            </div>
            <div className="mb-2 text-gray-600">
              <i className="fas fa-university mr-2 text-lg text-gray-400"></i>University of Oxford - Computer Science
            </div>
          </div>
            <div className="flex my-2 w-auto flex-col">
              <ButtonGroup className="flex-wrap w-auto" variant="outlined" ripple={false} color="white" size="sm">
                <Button className='w-auto'>View</Button>
                <Button className='w-auto'>Follow</Button>
              </ButtonGroup>
            </div>
        </section>
      </section>

      <section style={{ fontFamily: "Montserrat" }} class="flex font-medium items-center justify-center mt-8 mb-4">
        <section class="w-auto flex-row flex mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">
          <div class="mt-6 w-fit mx-auto">
            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" class="rounded-full w-28 " alt="profile picture" />
          </div>
          <div className="ml-3 w-auto">
            <div class="mt-8 ">
              <h2 class="text-white font-bold text-xl tracking-wide">Jonathan Smith</h2>
            </div>
            <div className="text-sm leading-normal mt-0 mb-2 text-gray-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-400"></i>
              Los Angeles, California
            </div>
            <div className="mb-2 text-gray-600">
              <i className="fas fa-briefcase mr-2 text-lg text-gray-400"></i>CEO - Creative Luhar Officer
            </div>
            <div className="mb-2 text-gray-600">
              <i className="fas fa-university mr-2 text-lg text-gray-400"></i>University of Oxford - Computer Science
            </div>
          </div>
            <div className="flex my-2 w-auto flex-col">
              <ButtonGroup className="flex-wrap w-auto" variant="outlined" ripple={false} color="white" size="sm">
                <Button className='w-auto'>View</Button>
                <Button className='w-auto'>Follow</Button>
              </ButtonGroup>
            </div>
        </section>
      </section>

      <section style={{ fontFamily: "Montserrat" }} class="flex font-medium items-center justify-center mt-8 mb-4">
        <section class="w-auto flex-row flex mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">
          <div class="mt-6 w-fit mx-auto">
            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" class="rounded-full w-28 " alt="profile picture" />
          </div>
          <div className="ml-3 w-auto">
            <div class="mt-8 ">
              <h2 class="text-white font-bold text-xl tracking-wide">Jonathan Smith</h2>
            </div>
            <div className="text-sm leading-normal mt-0 mb-2 text-gray-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-400"></i>
              Los Angeles, California
            </div>
            <div className="mb-2 text-gray-600">
              <i className="fas fa-briefcase mr-2 text-lg text-gray-400"></i>CEO - Creative Luhar Officer
            </div>
            <div className="mb-2 text-gray-600">
              <i className="fas fa-university mr-2 text-lg text-gray-400"></i>University of Oxford - Computer Science
            </div>
          </div>
            <div className="flex my-2 w-auto flex-col">
              <ButtonGroup className="flex-wrap w-auto" variant="outlined" ripple={false} color="white" size="sm">
                <Button className='w-auto'>View</Button>
                <Button className='w-auto'>Follow</Button>
              </ButtonGroup>
            </div>
        </section>
      </section>

      <section style={{ fontFamily: "Montserrat" }} class="flex font-medium items-center justify-center mt-8 mb-4">
        <section class="w-auto flex-row flex mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">
          <div class="mt-6 w-fit mx-auto">
            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" class="rounded-full w-28 " alt="profile picture" />
          </div>
          <div className="ml-3 w-auto">
            <div class="mt-8 ">
              <h2 class="text-white font-bold text-xl tracking-wide">Jonathan Smith</h2>
            </div>
            <div className="text-sm leading-normal mt-0 mb-2 text-gray-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-400"></i>
              Los Angeles, California
            </div>
            <div className="mb-2 text-gray-600">
              <i className="fas fa-briefcase mr-2 text-lg text-gray-400"></i>CEO - Creative Luhar Officer
            </div>
            <div className="mb-2 text-gray-600">
              <i className="fas fa-university mr-2 text-lg text-gray-400"></i>University of Oxford - Computer Science
            </div>
          </div>
            <div className="flex my-2 w-auto flex-col">
              <ButtonGroup className="flex-wrap w-auto" variant="outlined" ripple={false} color="white" size="sm">
                <Button className='w-auto'>View</Button>
                <Button className='w-auto'>Follow</Button>
              </ButtonGroup>
            </div>
        </section>
      </section>

      <section style={{ fontFamily: "Montserrat" }} class="flex font-medium items-center justify-center mt-8 mb-4">
        <section class="w-auto flex-row flex mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">
          <div class="mt-6 w-fit mx-auto">
            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" class="rounded-full w-28 " alt="profile picture" />
          </div>
          <div className="ml-3 w-auto">
            <div class="mt-8 ">
              <h2 class="text-white font-bold text-xl tracking-wide">Jonathan Smith</h2>
            </div>
            <div className="text-sm leading-normal mt-0 mb-2 text-gray-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-400"></i>
              Los Angeles, California
            </div>
            <div className="mb-2 text-gray-600">
              <i className="fas fa-briefcase mr-2 text-lg text-gray-400"></i>CEO - Creative Luhar Officer
            </div>
            <div className="mb-2 text-gray-600">
              <i className="fas fa-university mr-2 text-lg text-gray-400"></i>University of Oxford - Computer Science
            </div>
          </div>
            <div className="flex my-2 w-auto flex-col">
              <ButtonGroup className="flex-wrap w-auto" variant="outlined" ripple={false} color="white" size="sm">
                <Button className='w-auto'>View</Button>
                <Button className='w-auto'>Follow</Button>
              </ButtonGroup>
            </div>
        </section>
      </section>

      <section style={{ fontFamily: "Montserrat" }} class="flex font-medium items-center justify-center mt-8 mb-4">
        <section class="w-auto flex-row flex mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">
          <div class="mt-6 w-fit mx-auto">
            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" class="rounded-full w-28 " alt="profile picture" />
          </div>
          <div className="ml-3 w-auto">
            <div class="mt-8 ">
              <h2 class="text-white font-bold text-xl tracking-wide">Jonathan Smith</h2>
            </div>
            <div className="text-sm leading-normal mt-0 mb-2 text-gray-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-400"></i>
              Los Angeles, California
            </div>
            <div className="mb-2 text-gray-600">
              <i className="fas fa-briefcase mr-2 text-lg text-gray-400"></i>CEO - Creative Luhar Officer
            </div>
            <div className="mb-2 text-gray-600">
              <i className="fas fa-university mr-2 text-lg text-gray-400"></i>University of Oxford - Computer Science
            </div>
          </div>
            <div className="flex my-2 w-auto flex-col">
              <ButtonGroup className="flex-wrap w-auto" variant="outlined" ripple={false} color="white" size="sm">
                <Button className='w-auto'>View</Button>
                <Button className='w-auto'>Follow</Button>
              </ButtonGroup>
            </div>
        </section>
      </section>


      

    </div>
  );
}