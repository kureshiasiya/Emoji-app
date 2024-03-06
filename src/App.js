import React from "react";
import "./styles.css";
//var username = prompt("Give me your name");
var username = "Asiya";
export default function App() {
  return (
    <div className="App">
      <h1 style={{ backgroundColor: "blue" }}>Welcome {username}</h1>
    </div>
  );
}
