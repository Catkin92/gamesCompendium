import React from 'react';

const SenetDie = ({ diceRoll }) => {

  const diceMap = diceRoll.map((colour, index) => {
   return  <li key={index} className={colour}>x</li>
  })
  return (
    <ul class="diceRoll">{diceMap}</ul>
  )

}

export default SenetDie;