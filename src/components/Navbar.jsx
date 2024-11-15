import React from 'react'
import { FaMoon } from 'react-icons/fa';
import { MdLightMode } from 'react-icons/md';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <div>
        <h3>Jane.</h3>
      </div>
      <div className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <FaMoon className="moon" />
          {/* <MdLightMode /> */}
      </div>
    </header>
  );
}

export default Navbar