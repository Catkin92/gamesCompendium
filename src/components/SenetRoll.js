import React from 'react';
import SenetDie from './SenetDie';

const SenetRoll = ({ changeDiceRoll, diceRoll }) => {

  // rolls 4 dice and returns 1 for a white roll and 0 for a black roll
  function rollDice() {
    const diceRoll = [];

    for (let i = 0; i < 4; i++) {
      const colourNumber = Math.round(Math.random());
      diceRoll.splice(i, 0, colourNumber);
    }
    return diceRoll;
  }

  function handleRollDice() {
    const diceRoll = rollDice()
    changeDiceRoll(diceRoll);
  }
  

  return (
    <>
      <button onClick={handleRollDice}>Roll Dice</button>
      <SenetDie diceRoll={diceRoll}/>
    </>
  )
}

export default SenetRoll;