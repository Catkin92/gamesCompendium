import React from 'react';

const SenetRoll = () => {

  function rollDice() {
    const diceRoll = []
    for (let i = 0; i < 4; i++) {
      const colourNumber = Math.round(Math.random());
      if (colourNumber === 0) {
        <SenetDie key={i} colour="whiteDie"/>
      }
      else {
        <SenetDie key={i} colour="blackDie"/>
      }
    }
  }

  return (
    <p>{rollDice()}</p>
  )
}

export default SenetRoll;