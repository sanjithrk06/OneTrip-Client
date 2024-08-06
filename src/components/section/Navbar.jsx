import React from 'react'
import { NavLink, Navigate } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <div>Navbar</div>
    <nav className=' flex flex-col gap-2'>
        <NavLink to="home">Home</NavLink>
        <NavLink to="about">About</NavLink>
    </nav>
    </>
  )
}

export default Navbar;