import React, { useState } from "react";
import "./StartGame.css";

export default function StartGame() {
  const getRandomNumber = function () {
    return Math.floor(Math.random() * (255 - 1) + 1);
  };
  const [start, setStart] = useState(getRandomNumber());

  return (
    <div id="game">
      <div id="start-game">
        <p id="random-number">{start}</p>
        <button id="start-button" onClick={() => setStart(getRandomNumber())}>
          Start
        </button>
      </div>
    </div>
  );
}
