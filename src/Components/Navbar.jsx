import React, { useState } from 'react'
const Navbar = () => {
  const [signbtntext, setsignbtntext] = useState("Sign in")
  return (
    <>
      <header>
        <div className="nav-bar">
          <div id="startpage">
            <h2>StreamFlowz Entertaintment</h2>
          </div>
          <input type="text" placeholder="search your videos" name="search" id="search"/>
          <button className='signbtn'>{signbtntext}</button>
        </div>
      </header>
    </>
  )
}

export default Navbar