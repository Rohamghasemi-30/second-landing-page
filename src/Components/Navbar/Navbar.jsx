import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
  return (
   <nav>
    <div className="logo">
        <img src="../src/images/logo.png" alt="" />
    </div>
    <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/courses">Courses</NavLink></li>
        <li><NavLink to="/careers">Careers</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
    </ul>
    <div className="login">
        <button>login</button>
        <button>sign up</button>
    </div>
   </nav>
  )
}

export default Navbar