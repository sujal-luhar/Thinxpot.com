import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StickyNavbar from "./components/Navbar/Navbar";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import NavbarIn from "./components/Navbar/NavbarIn";
import Home from "./components/home/Home";
import PostDetail from "./components/Posts/PostDetail";
import UserProfile from "./components/Profile/UserProfile";
import EditProfile from "./components/Profile/EditProfile";
import PostSingle from "./components/Posts/PostSingle";
import CreatePost from "./components/Posts/CreatePost";
import ProfileFollowers from "./components/Profile/ProfileFollowers";
import ProfileFollowing from "./components/Profile/ProfileFollowing";
import PostList from "./components/Posts/PostList";
import ProfileLikes from "./components/Profile/ProfileLikes";
import Connect from "./components/connect/Connect";
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  return (
    <div>
      <Router>
        {localStorage.getItem("jwtToken") ? <NavbarIn /> : <StickyNavbar />}
        {/* {user ? <NavbarIn /> : <StickyNavbar />} */}
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Home />} />
            <Route path="/post" element={<PostSingle />} />
            <Route path="/postdetail/:postId" element={<PostDetail />} />
            <Route path="/postlist" element={<PostList />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/user/profile/:id" element={<UserProfile />} />
            <Route path="/user/Likes/:id" element={<ProfileLikes />} />
            <Route path="/user/Followers" element={<ProfileFollowers />} />
            <Route path="/user/Following" element={<ProfileFollowing />} />
            <Route path="/connect" element={<Connect />} />
            <Route
              path="/edit"
              element={<EditProfile userId="64f7173ecaa7ceedd35b3872" />}
            />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
