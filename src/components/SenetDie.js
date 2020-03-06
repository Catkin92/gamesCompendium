import React from 'react';

const SenetDie = ({ diceRoll }) => {

  const diceMap = diceRoll.map((roll, index) => {
    return <li key={index} className={roll ? "whiteDie" : "blackDie"}>x</li>
  })

  return (
    <ul className="diceRoll">{diceMap}</ul>
  )

}

export default SenetDie;