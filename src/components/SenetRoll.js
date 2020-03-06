import React from 'react';
import SenetDie from './SenetDie';

const SenetRoll = () => {

  function rollDice() {
    const diceRoll = []
    for (let i = 0; i < 4; i++) {
      const colourNumber = Math.round(Math.random());
      if (colourNumber === 0) {
        diceRoll.splice(i, 0, <SenetDie key={i} colour="whiteDie"/>)
      }
      else {
        diceRoll.splice(i, 0, <SenetDie key={i} colour="blackDie"/>)
      }
    }

    return diceRoll;
  }

  return (
    <>
    <p>SenetRoll</p>
    <p>{rollDice()}</p>
    </>
  )
}

export default SenetRoll;