import React from 'react'
import { FaMoon } from 'react-icons/fa';
import { MdLightMode } from 'react-icons/md';
import { NavLink } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {

  const {theme, toggleButton} = useTheme();
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
        <button onClick={toggleButton}>
          {theme === "light" ? <FaMoon className="moon" /> : <MdLightMode className='sun' />}
        </button>

        {/* <p>Mode: {theme}</p> */}
      </div>
    </header>
  );
}

export default Navbar;