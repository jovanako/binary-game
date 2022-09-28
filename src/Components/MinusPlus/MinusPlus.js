import "./MinusPlus.css";

export default function MinusPlus(props) {
  const { setComputedNumber, computedNumber, start } = props;
  const add = function (num) {
    if (num < 255) {
      return num + 1;
    }
    return 255;
  };

  const subtract = function (num) {
    if (num > 0) {
      return num - 1;
    }
    return 0;
  };

  return (
    <div id="computed-number">
      <p className={computedNumber === start ? "bold" : ""}>{computedNumber}</p>
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
