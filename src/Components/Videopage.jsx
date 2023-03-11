import React, { useState } from 'react'
import Videolist from './Videolist'
import Videoplayer from './Videoplayer'

const Videopage = () => {
  const [clicked, setclicked] = useState(false)

  const clickhandler =(e)=>{
    console.log(e.target)
  }
    return (
    <>
    <div id="playlist" onClick={clickhandler}>
        {clicked?<Videoplayer/>:<Videolist/>}
        </div>
    </>
  )
}

export default Videopage