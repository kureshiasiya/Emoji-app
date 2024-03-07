import React, { useState } from "react";
import "./styles.css";
//var username = prompt("Give me your name");

export default function App() {
  const [likeCounter, setLikeCounter] = useState(0);
  function likeClickHandler() {
    var newlikeCounter = likeCounter + 1; //processing
    setLikeCounter(newlikeCounter); //processing/output
  }
  console.log("likeCounter", likeCounter);

  return (
    <div className="App">
      <h1>Inside Outt</h1>
      <button onClick={likeClickHandler}>Like Me</button>
      {likeCounter}
    </div>
  );
}
