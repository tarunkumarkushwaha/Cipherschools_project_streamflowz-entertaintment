import React from 'react'

const Videoicons = () => {
    
   let vidname = "src/assets/Raju shrivastav.mp4"
   let bgimage = {backgroundImage : `url(src/assets/bg.jpg)`}
    return (
        <>
            <div className="songbox" style={bgimage}>
                <p className="songnames">{vidname}</p>
            </div>
        </>
    )
}

export default Videoicons