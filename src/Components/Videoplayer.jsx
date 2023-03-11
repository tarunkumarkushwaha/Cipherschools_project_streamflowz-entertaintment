import React from 'react'

const Videoplayer = ({ que }) => {

  return (
    <>
      <h1>{que}</h1>
      <div className="player">
        <video controls>
          <source src={que} type="video/mp4" />
          <source src="video/sintel-short.webm" type="video/webm" />
        </video>
      </div>

    </>
  )
}

export default Videoplayer