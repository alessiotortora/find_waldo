import React, { useState } from "react";
import styles from "./Game.css";
import waldo from "../../assets/waldo.jpeg";

function Game() {
  const [found, setFound] = useState(false);
  const [clickX, setClickX] = useState(0);
  const [clickY, setClickY] = useState(0);
  const waldoX = 300; // Sample Waldo X coordinate
  const waldoY = 200; // Sample Waldo Y coordinate

  const handleClick = (event) => {
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    console.log(`Waldo coordinates: x=${x}, y=${y}`);
    setClickX(x);
    setClickY(y);

    const tolerance = 20; // Adjust this value to determine the size of the tag box

    // Check if the click coordinates fall within the tolerance range of the Waldo coordinates
    if (
      Math.abs(clickX - waldoX) <= tolerance &&
      Math.abs(clickY - waldoY) <= tolerance
    ) {
      setFound(true);
    }
  };

  return (
    <div>
      {!found && <h2>Click on Waldo to find him</h2>}
      {found && <h2>Congrats you found him</h2>}
      <img src={waldo} alt="waldo" onClick={handleClick} />
    </div>
  );
}

export default Game;
