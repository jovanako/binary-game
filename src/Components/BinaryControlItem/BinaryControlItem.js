import React, { useState } from "react";

export default function BinaryControlItem(props) {
  const { buttonNumber, computedNumber, setComputedNumber } = props;
  const [digit, setDigit] = useState(0);

  const clickHandler = function () {
    setDigit(1 - digit);
    if (digit === 0) {
      setComputedNumber(computedNumber + buttonNumber);
    } else {
      setComputedNumber(computedNumber - buttonNumber);
    }
  };

  return (
    <div id="binary-control-item">
      <p>{digit}</p>
      <button onClick={clickHandler}>{buttonNumber}</button>
    </div>
  );
}
