import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidemenu = () => {
  let logon = "you have logged"
  return (
    <>
      <div className="sidemenu">
        <div className="flex-column-center">
        <NavLink to={"/"} className="sidebtn">Home</NavLink>
        <NavLink to={"/mostplayed"} className="sidebtn">Most played</NavLink>
        <NavLink to={"/recentlyadded"} className="sidebtn">Recently added</NavLink>
        <NavLink to={"/library"} logon={logon} className="sidebtn">Library</NavLink>
        </div>
      </div>
    </>
  )
}

export default Sidemenu