import React from 'react'
const Navbar = () => {
  return (
    <>
      <header>
        <div className="nav-bar">
          <div id="startpage">
            <h2>StreamFlowz Entertaintment</h2>
          </div>
          
          <input type="text" placeholder="search your videos" name="search" id="search"/>
        </div>
      </header>
    </>
  )
}

export default Navbar