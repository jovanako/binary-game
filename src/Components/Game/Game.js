import React, { useState } from "react";
import BinaryControls from "../BinaryControls/BinaryControls";
import MinusPlus from "../MinusPlus/MinusPlus";
import "./Game.css";

export default function Game() {
  const getRandomNumber = function () {
    return Math.floor(Math.random() * (255 - 1) + 1);
  };
  const [start, setStart] = useState(getRandomNumber());
  const [computedNumber, setComputedNumber] = useState(0);

  return (
    <>
      <div id="game">
        <div id="start-game">
          <p id="random-number">{start}</p>
          <button id="start-button" onClick={() => setStart(getRandomNumber())}>
            Start
          </button>
        </div>
      </div>
      <BinaryControls
        computedNumber={computedNumber}
        setComputedNumber={setComputedNumber}
      />
      <div id="computed-number">
        <p>{computedNumber}</p>
        <MinusPlus
          computedNumber={computedNumber}
          setComputedNumber={setComputedNumber}
        />
      </div>
    </>
  );
}
