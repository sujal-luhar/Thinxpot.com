// we will put Profile cards here of different users by propes
import React, { useState } from "react";
import {
  ButtonGroup,
  Button,
  Input
} from "@material-tailwind/react";
import ProfileCard from "./ProfileCard";

function Connect() {
  const [searchValue, setSearchValue] = useState('');
  const [searching, setSearching] = useState(false);

  const handleSearch = () => {
    // if (searchValue.trim() !== '') {
      // Perform the search operation here
      // You can use the searchValue to filter users
      // Example: fetchUsers(searchValue);

    //   setSearching(true);
    // }
  };

  return (
    <div>
      {/* <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css" /> */}
      <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />

      <form className="mx-32 flex font-medium items-center justify-center mt-8 mb-4 gap-3 ">
        <Input size="lg" label="Search by Name or Username" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
        <Button ripple={false} onClick={handleSearch}>
          Search
        </Button>
      </form>

      <ProfileCard />
    </div>
  )
}

export default Connect