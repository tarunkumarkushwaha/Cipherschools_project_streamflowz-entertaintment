import React from 'react'
import Navbar from './Navbar'
import Sidemenu from './Sidemenu'

const Mostplayed = () => {
  return (
    <>
    <Navbar />
      <div className="mainmenu">
        <Sidemenu/>
      </div>
      <div id="footer">
        &copy; 2023 StreamFlowzz Entertainment
      </div>
    </>
  )
}

export default Mostplayed