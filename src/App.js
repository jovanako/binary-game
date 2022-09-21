import BinaryControls from "./Components/BinaryControls/BinaryControls";
import StartGame from "./Components/StartGame/StartGame";
import ComputedBinary from "./Components/ComputedBinary/ComputedBinary";
import Title from "./Components/Title/Title";

function App() {
  return (
    <>
      <Title />
      <StartGame />
      <BinaryControls />
      <ComputedBinary />
    </>
  );
}

export default App;
