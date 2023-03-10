import React from 'react'

const Videoplayer = () => {
  return (
    <>
    <div className="player">
  <video controls>
    <source src="video/sintel-short.mp4" type="video/mp4" />
    <source src="video/sintel-short.webm" type="video/webm" />
  </video>
  <div className="controls">
    <button className="play" data-icon="P" aria-label="play pause toggle"></button>
    <button className="stop" data-icon="S" aria-label="stop"></button>
    <div className="timer">
      <div></div>
      <span aria-label="timer">00:00</span>
    </div>
    <button className="rwd" data-icon="B" aria-label="rewind"></button>
    <button className="fwd" data-icon="F" aria-label="fast forward"></button>
  </div>
</div>

    </>
  )
}

export default Videoplayer