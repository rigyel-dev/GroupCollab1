import React from 'react'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
  return (
    <nav>
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/service">Services</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  )
}

export default NavBar
