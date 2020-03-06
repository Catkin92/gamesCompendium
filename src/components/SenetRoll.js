import React from 'react';
import SenetDie from './SenetDie';

const SenetRoll = ({ changeDiceRoll, diceRoll }) => {

  function rollDice() {
    const diceRoll = [];

    for (let i = 0; i < 4; i++) {
      const colourNumber = Math.round(Math.random());

      if (colourNumber === 0) {
        diceRoll.splice(i, 0, "whiteDie")
      }
      else {
        diceRoll.splice(i, 0, "blackDie")
      }
    }

    return diceRoll;
  }

  function handleRollDice() {
    const diceRoll = rollDice()
    changeDiceRoll(diceRoll);
  }

  return (
    <>
      <p>SenetRoll</p>
      <button onClick={handleRollDice}>Roll Dice</button>
      <SenetDie diceRoll={diceRoll}/>
    </>
  )
}

export default SenetRoll;