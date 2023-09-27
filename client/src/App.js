import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import StickyNavbar from "./components/Navbar/Navbar";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import NavbarIn from "./components/Navbar/NavbarIn";
import Home from "./components/home/Home";
import PostDetail from "./components/Posts/PostDetail";
import UserProfile from "./components/Profile/UserProfile";
import ProfileCard from "./pages/connect/ProfileCard";
import EditProfile from "./components/Profile/EditProfile";
import PostSingle from "./components/Posts/PostSingle";
import CreatePost from "./components/Posts/CreatePost";
import ProfileFollowers from "./components/Profile/ProfileFollowers";
import ProfileFollowing from "./components/Profile/ProfileFollowing";
import PostList from "./components/Posts/PostList";

function App() {
  const user = true;

  return (
    <div>
      <Router>
        {user ? <NavbarIn /> : <StickyNavbar />}
        <Routes>
          <Route path="/" element={user ? <Home /> : <Login />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/register" element={user ? <Home /> : <Register />} />
          <Route path="/post" element={user ? <PostSingle /> : <Login />} />
          <Route
            path="/postdetail"
            element={user ? <PostDetail /> : <Login />}
          />
          <Route
            path="/postlist"
            element={user ? <PostList /> : <Login />}
          />
          <Route path="/create" element={user ? <CreatePost /> : <Login />} />
          <Route
            path="/user/:userId"
            element={user ? <UserProfile /> : <Login />}
          />
          <Route
            path="/user/:userId/Followers"
            element={user ? <ProfileFollowers /> : <Login />}
          />
          <Route
            path="/user/:userId/Following"
            element={user ? <ProfileFollowing /> : <Login />}
          />
          <Route path="/connect" element={user ? <ProfileCard /> : <Login />} />
          <Route path="/edit" element={user ? <EditProfile /> : <Login />} />

          {/* <Route path="/post/:postId" element={<Single />} /> */}
          {/* <Route path="/write" element={user ? <Write /> : <Register />} /> */}
          {/* <Route path="/settings" element={user ? <Settings /> : <Register />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
