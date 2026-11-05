import Die from "./Die";
import "../styles/main-section.css";
import React from "react";
import Confetti from "react-confetti";
export default function App() {
  const dieArray = generateDiceArray();

  const diceArrayObj = dieArray.map((item, index) => ({
    id: index,
    value: item,
    isHeld: false,
  }));

  const [diceArray, setDiceArray] = React.useState(diceArrayObj);

  const diceArrayHtml = diceArray.map((item, index) => (
    <Die
      key={index}
      id={item.id}
      value={item.value}
      isHeld={item.isHeld}
      handleButtonClick={handleButtonClick}
    />
  ));

  function generateDiceArray() {
    return new Array(10).fill(0).map(() => Math.floor(Math.random() * 6 + 1));
  }

  function handleRoll() {
    let newDiceArray = generateDiceArray();
    setDiceArray((prev) => {
      return prev.map((item, index) => {
        if (item.isHeld) {
          return item;
        } else return { ...item, value: newDiceArray[index] };
      });
    });
  }

  function handleButtonClick(id) {
    setDiceArray((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, isHeld: !item.isHeld };
        } else return item;
      });
    });
  }

  function handleConfetti() {
    const allValue = diceArray.every(
      (item) => item.value === diceArray[0].value,
    );
    const allHeld = diceArray.every(
      (item) => item.isHeld === diceArray[0].isHeld,
    );
    if (allValue & allHeld) {
      return true;
    } else return false;
  }

  return (
    <main>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">{diceArrayHtml}</div>
      <button className="roll-btn" onClick={handleRoll}>
        Roll a Dice
      </button>
      <>
        {handleConfetti() && (
          <div className="win-banner">
            <Confetti />
            <span className="win-emoji">🎉</span>
            <h2 className="win-title">TENZIES!</h2>
            <p className="win-text">Congratulations, you won!</p>
          </div>
        )}
      </>
    </main>
  );
}
