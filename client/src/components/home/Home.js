import React from "react";
import PostList from "../Posts/PostList";

function Home() {
  const home = {
    textAlign: "center",
    marginTop: "100px",
  };
  return (
    <>
      <div>
        <h2 style={home}>This is Home Page</h2>
        {/* <PostList /> */}
      </div>
    </>
  );
}

export default Home;
