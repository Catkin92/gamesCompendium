import React from 'react';
import SenetCell from './SenetCell';

const SenetBoard = () => {

  //  CREATES AN ARRAY OF 30 SENET CELLS
  function createBoard() {
    const gameBoard = [];
    let i;
    // ALTERNATES BLACK AND WHITE COLOURS
    for (i = 0; i < 30; i++) {
      if (i % 2 === 0) {
        gameBoard.splice(i, 0, <SenetCell key={i} colour="whiteCell" id={i + 1}/>)
      }
      else {
        gameBoard.splice(i, 0, <SenetCell key={i} colour="blackCell" id={i + 1}/>)
      }
    }
    // TAKES OFF THE LAST 10 CELLS AND SAVES TO ANOTHER ARRAY
    const gameBoardEnd = gameBoard.slice(20);
    gameBoard.splice(20, 10);

    // RETURNS AN ARRAY WITH THE MIDDLE ROW (11-20) REVERSED
    const newGameBoard = gameBoard.splice(0, 10)
    .concat(gameBoard.reverse())
    .concat(gameBoardEnd);
    
    return newGameBoard;
  }

  return (
    <>
    <h4>SenetBoard</h4>
    <ul className="senetBoard">{createBoard()}</ul>
    </>
  )
}

export default SenetBoard;