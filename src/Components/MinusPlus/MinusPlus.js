import "./MinusPlus.css";

export default function MinusPlus(props) {
  const { setComputedNumber, computedNumber, start } = props;
  const add = function (num) {
    return num + 1;
  };

  const subtract = function (num) {
    return num - 1;
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
