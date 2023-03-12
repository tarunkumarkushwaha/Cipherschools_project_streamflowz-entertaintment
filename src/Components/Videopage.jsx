import React, { useEffect, useState } from 'react'
import Videolist from './Videolist'
import Videoplayer from './Videoplayer'

const Videopage = () => {
  const [clicked, setclicked] = useState(false)
  const [que, setque] = useState("")

  const clickhandler = (e) => {
    if (e.target.innerText.length < 50) {
      console.log(e.target)
      setque(e.target.innerText)
      setclicked(true)
    }

    else {
      console.log("click ignored")
    }
  }

  const backbutton = () => { setclicked(false) }

  return (
    <>
      <div className="flex-column-center">
        <div className="flex-row-center">
          {clicked ? <button className='backbtn' onClick={backbutton}>Back</button> : <div className="discover"></div>}
        </div>
        <div id="playlist" onClick={clickhandler}>
          {clicked ? <Videoplayer que={que} /> : <Videolist />}
        </div>
      </div>
    </>
  )
}

export default Videopage