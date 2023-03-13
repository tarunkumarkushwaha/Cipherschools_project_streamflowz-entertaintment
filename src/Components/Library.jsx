import React from 'react'
import Navbar from './Navbar'
import Sidemenu from './Sidemenu'
import Videopage from './Videopage'

const Library = ({logon}) => {
  return (
    <>
    <Navbar />
    <h1>{logon}</h1>
      <div className="mainmenu">
        <Sidemenu/>
        
        <div className='noinfo'>
          <h1>sign in to get the info</h1>
        </div>
      </div>
      <div id="footer">
        &copy; 2023 StreamFlowzz Entertainment
      </div>
    </>
  )
}

export default Library