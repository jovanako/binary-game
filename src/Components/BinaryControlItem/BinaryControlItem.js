import React, { useState } from "react";

export default function BinaryControlItem(props) {
  const { buttonNumber } = props;
  const [digit, setDigit] = useState(0);

  const binaryDigitControl = function (digit) {
    return 1 - digit;
  };

  return (
    <div id="binary-control-item">
      <p>{digit}</p>
      <button onClick={() => setDigit(binaryDigitControl(digit))}>
        {buttonNumber}
      </button>
    </div>
  );
}
