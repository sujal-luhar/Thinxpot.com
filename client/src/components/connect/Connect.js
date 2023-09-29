// we will put Profile cards here of different users by propes
import React, { useState } from "react";
import {
  ButtonGroup,
  Button,
  Input
} from "@material-tailwind/react";
import ProfileCard from "./ProfileCard";
import api from "../../api/axios";

function Connect() {
  const [searchValue, setSearchValue] = useState('');
  const [searching, setSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [noUserFound, setNoUserFound] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (searchValue.trim() !== '') {
      await api
        .get(`/api/users/search?search=${searchValue}`)
        .then((response) => {
          const users = response.data.users;

          if (!users) {
            setNoUserFound(true);
            setSearchResults([]); // Clear search results when no users are found
          } else {
            setSearchResults(users);
            setSearching(true);
            setNoUserFound(false);
          }
        })
        .catch((error) => {
          console.error("Error searching for users:", error);
        });
    }
    else {
      setSearchResults([]);
      setNoUserFound(false);
    }
  };

  return (
    <div>
      {/* <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css" /> */}
      <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />

      <form onSubmit={handleSearch} className="mx-32 flex font-medium items-center justify-center mt-8 mb-4 gap-3 ">
        <Input size="lg" label="Search by Name or Username" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
        <Button ripple={false} type="submit" >
          Search
        </Button>
      </form>

      {/* <ProfileCard /> */}

      {searching && searchResults.length > 0 && (
        <div className="mx-32 mt-4">
          {searchResults.map((user) => (
            <ProfileCard key={user._id} user={user} />
          ))}
        </div>
      )}

      {noUserFound && (
        <div class="mt-24 flex justify-center" style={{ fontFamily: "Montserrat" }}>
          <h2 class="text-gray-800 font-bold text-xl tracking-wide">No Users Found</h2>
        </div>
      )}

    </div>
  )
}

export default Connect