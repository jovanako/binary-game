import BinaryControlItem from "../BinaryControlItem/BinaryControlItem";
import "./BinaryControls.css";

export default function BinaryControls(props) {
  const { computedNumber, setComputedNumber } = props;
  const buttonNumbers = [128, 64, 32, 16, 8, 4, 2, 1];
  const numberOfItems = buttonNumbers.length;

  return (
    <div id="binary-controls">
      {[...Array(numberOfItems)].map((_, i) => (
        <BinaryControlItem
          key={i}
          buttonNumber={buttonNumbers[i]}
          computedNumber={computedNumber}
          setComputedNumber={setComputedNumber}
        />
      ))}
    </div>
  );
}
