import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import StickyNavbar from './components/Navbar/Navbar'
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import NavbarIn from './components/Navbar/NavbarIn';
import Home from './pages/home/Home';


function App() {
  var user = true

  return (
    <div>
      <Router>
      {user ? <NavbarIn /> : <StickyNavbar />}
        <Routes>
          <Route path="/" element={<Home />} />             
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/register" element={user ? <Home /> : <Register />} />
          {/* <Route path="/post/:postId" element={<Single />} /> */}
          {/* <Route path="/write" element={user ? <Write /> : <Register />} /> */}
          {/* <Route path="/settings" element={user ? <Settings /> : <Register />} /> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App