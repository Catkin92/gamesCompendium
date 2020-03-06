import React from 'react';

const SenetPlayerPosition = ({ whitePieces, blackPieces, diceRoll }) => {


  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  
  function calculateMove() {
    let moveDistance = 0;
    if (diceRoll.length !== 0) {
      moveDistance = diceRoll.reduce(reducer);
        if (moveDistance === 0) {
          moveDistance = 6;
        }
    }
    else {
      return null;
    }
    return moveDistance;
  }

  return (
    <>
    <p>Move Distance: {calculateMove()}</p>
    </>
  )

}

export default SenetPlayerPosition;