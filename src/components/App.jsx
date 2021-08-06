import React, { useState } from "react";

function App() {

  const [text, setText] = useState("Hola");
  const [color, setColor] = useState("white");

  function handleOnClick(){
    setText("Submitted");
  }
  function handleOnMouseOver(){
    setColor("black");
  }
  function handleOnMouseOut(){
    setColor("white");
  }
  return (
    <div className="container">
      <h1>{text}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{backgroundColor : color}}
              onClick={handleOnClick}
              onMouseOut={handleOnMouseOut}
              onMouseOver={handleOnMouseOver}>
        Submit
      </button>
    </div>
  );
}

export default App;
