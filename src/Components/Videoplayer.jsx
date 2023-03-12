import React, { useState, useEffect } from "react";

const Videoplayer = ({ que }) => {
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
          <video controls className='videoplayer'>
            <source src={que} type="video/mp4" />
          </video>
        </div>
        <div className="flex-row-center">
          <img src="src\assets\like-thumb-up-vote-comments-vote-icon-11563607354tsn0l35fca.png" onClick={likehandler} className='like' alt="like" />
          <div className="like" >{like}</div>
        </div>
        <div className="flex-row-center">
        <input
            type="text"
            value={item}
            onChange={displaychange}
            onKeyDown={onEnterPress}
            placeholder="add a comment"
            className="comment"
          ></input><button className="comment-button" onClick={addcomment}>
          Add
        </button>
        </div>
          <div className="commentdisplay">
          {comment.map((a) => {
            return <div key={comment.indexOf(a) + 1} className="commentdiv">
              <p className="to-do" id={comment.indexOf(a) + "commentitem"}> {" "}
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