import "./MinusPlus.css";

export default function MinusPlus(props) {
  const { setComputedNumber, computedNumber } = props;
  const add = function (num) {
    return num + 1;
  };

  const subtract = function (num) {
    return num - 1;
  };

  return (
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
  );
}
