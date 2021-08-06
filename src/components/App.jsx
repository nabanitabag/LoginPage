import React, { useState } from "react";

function App() {
  const [text, setText] = useState("Submit");
  const [color, setColor] = useState("white");
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");

  function handleClick(event) {
    setText("Submitted");
    setHeading(name);
    event.preventDefault();
  }
  function handleMouseOver() {
    setColor("black");
  }
  function handleMouseOut() {
    setColor("white");
  }
  function handleChange(event) {
    setName(event.target.value);
  }
  return (
    <div className="container">
      <h1>Hello {headingText}!</h1>
      <form onSubmit={handleClick}>
        {/* controlled component */}
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button
          type="submit"
          style={{ backgroundColor: color }}
          onMouseOut={handleMouseOut}
          onMouseOver={handleMouseOver}
        >
          {text}
        </button>
      </form>
    </div>
  );
}

export default App;
