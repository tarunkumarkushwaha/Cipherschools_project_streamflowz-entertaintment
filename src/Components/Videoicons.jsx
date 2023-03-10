import React from 'react'

const Videoicons = () => {
   let vidname = "tarun uploaded video.mp4"
   let bgimage = "background-image:url(src/assets/bg.jpg)"
    return (
        <>
            <div className="songbox">
                <p className="songnames">{vidname}</p>
                {/* style={bgimage} */}
            </div>
        </>
    )
}

export default Videoicons