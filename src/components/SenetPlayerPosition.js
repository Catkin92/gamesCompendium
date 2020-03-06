import React from 'react';
import SenetPiece from './SenetPiece';

const SenetPlayerPosition = ({ whitePieces, blackPieces, diceRoll }) => {


  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  
  const moveDistance = diceRoll.length !== 0 ? diceRoll.reduce(reducer) : null;
  

  return (
    <>
    <p>SenetPlayerPosition</p>
    </>
  )

}

export default SenetPlayerPosition;