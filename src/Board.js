import Dice from "./Dice";

const Board = ({ name, color, num, sum, gameHistory }) => {
  return (
    <>
      <h2>{name}</h2>
      <Dice color={color} num={num} />
      <h2>총점</h2>
      <p>{sum}</p>
      <p>{gameHistory.join(", ")}</p>
    </>
  );
};

export default Board;
