import React, { useState, useEffect } from "react";

const Videoplayer = () => {
  const [butn, setbutn] = useState("▶");
  const ref = React.useRef(null);
  let que = "https://media.istockphoto.com/id/473082495/video/robin-singing-in-an-urban-park.mp4?s=mp4-640x640-is&k=20&c=j-ywLny4gZOfnrK1IW70Up0HIo84MKNyNg_UzhfSjC4="
  const togglePlay = ()=>{
    if (ref.current.paused || ref.current.ended) {
      ref.current.play();
      setbutn("||")
    } else {
      ref.current.pause();
      setbutn("▶")
    }
  }

   // states 
   const [item, setItem] = useState("");
   const [like, setlike] = useState(0);
   const [comment, setcomment] = useState(JSON.parse(localStorage.getItem('items')) || []);
 
   // display change event 
   const displaychange = (e) => {
     setItem(e.target.value);
   };
   // button event 
   const addcomment = () => {
     // setcomment returns the initial state in the userstate
     // it works as Array.push method 
     setcomment((olditems) => {
       return [...olditems, item]
     })
     setItem('')
     // save to localStorage
     localStorage.setItem("items", JSON.stringify(comment))
   }

   const onEnterPress = (e) => {
    if (e.keyCode == 13 && e.shiftKey == false) {
      e.preventDefault();
      addcomment();
    }
  }

  const likehandler = ()=>{
    setlike(like+1)
  }
  // when usestate comment changes function in use effect is called 
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(comment));
  }, [comment]);

  return (
    <>
      <div className="flex-column-center">
        <div className="player-container">
          <video ref={ref} controls className='videoplayer' onClick={togglePlay}>
            <source src={que} type="video/mp4" />
          </video>
          {/* <button className="vidplaybtn" onClick={togglePlay}>{butn}</button> */}
        </div>
        <div className="flex-row-center">
          <img src="src\assets\like-thumb-up-vote-comments-vote-icon-11563607354tsn0l35fca.png" onClick={likehandler} className='like' alt="like" />
          <div className="like" >{like}</div>
          <input
            type="text"
            value={item}
            onChange={displaychange}
            onKeyDown={onEnterPress}
            placeholder="add a comment"
            className="commentinput"
          ></input><button className="comment-button" onClick={addcomment}>
          Add
        </button>
        </div>
          <div className="commentdisplay">
            <h3>Comments</h3>
          {comment.map((a) => {
            return <div key={comment.indexOf(a) + 1} className="commentdiv">
              <p id={comment.indexOf(a) + "commentitem"}> {" "}
                {comment.indexOf(a) + 1}. {a}
              </p>
            </div>
          })}
          </div>
      </div>
    </>
  )
}

export default Videoplayer