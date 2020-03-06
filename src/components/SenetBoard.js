import React from 'react';
import SenetCell from './SenetCell';

const SenetBoard = () => {

  function createBoard() {
    const gameBoard = [];
    let i;
    for (i = 0; i < 30; i++) {
      if (i % 2 === 0) {
        gameBoard.splice(i, 0, <SenetCell key={i} colour="whiteCell" id={i + 1}/>)
      }
      else {
        gameBoard.splice(i, 0, <SenetCell key={i} colour="blackCell" id={i + 1}/>)
      }
    }
    console.log(gameBoard);
    return gameBoard;
  }

  return (
    <>
    <h4>SenetBoard</h4>
    <ul>{createBoard()}</ul>
    </>
  )
}

export default SenetBoard;