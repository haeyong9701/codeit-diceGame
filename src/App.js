import { useState } from "react";
import Dice from "./Dice";
import Button from "./Button";

const random = (n) => {
  return Math.ceil(Math.random() * n);
};

const App = () => {
  const [num, setNum] = useState(1);

  const handleRollClick = () => {
    const nextNum = random(6);
    setNum(nextNum);
  };

  const handleClearClick = () => {
    setNum(1);
  };

  return (
    <>
      <div>
        <Button onClick={handleRollClick}>던지기</Button>
        <Button onClick={handleClearClick}>처음부터</Button>
      </div>
      <Dice color="blue" num={num} />
    </>
  );
};

export default App;
