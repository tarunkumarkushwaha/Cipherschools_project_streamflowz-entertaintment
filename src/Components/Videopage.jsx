import React from 'react'
import Videoicons from './Videoicons'

const Videopage = () => {
  const caller =()=>{
    console.log("video clicked")
  }
    return (
    <>
    <div id="playlist">
        <div id="trackslist">
          <Videoicons caller={caller}/>
          <Videoicons/>
          <Videoicons/> 
          <Videoicons/>
          <Videoicons/>
          <Videoicons/>
          <Videoicons/>
          <Videoicons/>
          <Videoicons/>
          <Videoicons/>
          <Videoicons/>
          <Videoicons/>
        </div>
        </div>
    </>
  )
}

export default Videopage