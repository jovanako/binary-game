import BinaryControlItem from "../BinaryControlItem/BinaryControlItem";

export default function BinaryControls() {
  const buttonNumbers = [128, 64, 32, 16, 8, 4, 2, 1];
  const numberOfItems = buttonNumbers.length;

  return (
    <div id="binary-control">
      <div id="binary-control-items">
        {[...Array(numberOfItems)].map((_, i) => (
          <BinaryControlItem key={i} buttonNumber={buttonNumbers[i]} />
        ))}
      </div>
    </div>
  );
}