import React, { useState } from "react";
import "./ComputedBinary.css";

export default function Computed() {
  const [computedNumber, setComputedNumber] = useState(0);

  const add = function (num) {
    return num + 1;
  };

  const subtract = function (num) {
    return num - 1;
  };

  return (
    <div id="computed-number">
      <p>{computedNumber}</p>
      <div id="minus-plus-buttons">
        <button
          className="minusPlus"
          onClick={() => setComputedNumber(subtract(computedNumber))}
        >{`-1`}</button>
        <button
          className="minusPlus"
          onClick={() => setComputedNumber(add(computedNumber))}
        >{`+1`}</button>
      </div>
    </div>
  );
}
