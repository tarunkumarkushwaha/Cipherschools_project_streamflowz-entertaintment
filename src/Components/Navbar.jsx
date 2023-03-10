import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <header>
        <div className="nav-bar">
          <div id="startpage">
            <h2>StreamFlowz Entertaintment</h2>
          </div>
          <NavLink to={"/"} id="home">Home</NavLink>
          <NavLink to={"/plans"} id="plan">Plans</NavLink>
          <NavLink to={"/signup"} id="signup">Sign up</NavLink>
          <input type="text" placeholder="search your songs" name="search" id="search"/>
        </div>
      </header>
    </>
  )
}

export default Navbar