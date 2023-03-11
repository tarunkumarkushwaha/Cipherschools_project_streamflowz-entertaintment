import React, { useEffect, useState } from 'react'
import Videolist from './Videolist'
import Videoplayer from './Videoplayer'

const Videopage = () => {
  const [clicked, setclicked] = useState(false)
  const [que, setque] = useState("")

  const clickhandler =(e)=>{
    if(e.target.innerText.length<50){
      console.log(e.target)
      setque(e.target.innerText)
      setclicked(true) 
    }

    else{
      console.log("click ignored")
    }
  }

  const backbutton =() => {setclicked(false)}

    return (
    <>
    {clicked?<button className='playerbtn' onClick={backbutton}>Back</button>:null}
    <div id="playlist" onClick={clickhandler}>
        {clicked?<Videoplayer que={que}/>:<Videolist/>}
        </div>
    </>
  )
}

export default Videopage