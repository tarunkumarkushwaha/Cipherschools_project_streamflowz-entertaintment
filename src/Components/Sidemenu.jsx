import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidemenu = () => {
  return (
    <>
      <div className="sidemenu">
        <div className="flex-column-center">
        <NavLink to={"/"} className="sidebtn">Home</NavLink>
        <NavLink to={"/mostplayed"} className="sidebtn">Most played</NavLink>
        <NavLink to={"/recentlyadded"} className="sidebtn">Recently added</NavLink>
        <NavLink to={"/library"} className="sidebtn">Library</NavLink>
        </div>
        {/* <button className="sidebtn home">Recently Added</button>
        <button className="sidebtn home">Most played</button>
        <button className="sidebtn home">Library</button> */}
      </div>
    </>
  )
}

export default Sidemenu