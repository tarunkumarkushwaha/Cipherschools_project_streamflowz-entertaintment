import React from 'react'

const Videoicons = () => {
    
   let link = "https://cdn.pixabay.com/vimeo/320725678/robin-21723.mp4?width=1280&expiry=1678709081&hash=41073159a827836c6eab944794f61a113140ce28"
   let bgimage = {backgroundImage : `url(https://unsplash.com/photos/ImhNT6UAaGE/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8cm9iaW4lMjBiaXJkfGVufDB8fHx8MTY3ODcwODg0Ng&force=true&w=1920)`}
    return (
        <>
            <div className="songbox" style={bgimage}>
                <p className="songnames">name</p>
            </div>
        </>
    )
}

export default Videoicons