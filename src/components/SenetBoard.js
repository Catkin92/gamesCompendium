import React from 'react';
import SenetCell from './SenetCell';
import SenetPlayerPosition from './SenetPlayerPosition';

const SenetBoard = ({ whitePieces, blackPieces, diceRoll }) => {

  function createBoard() {
    const gameBoard = [];
    let i;
    for (i = 1; i < 31; i++) {
      let index = Math.floor(i / 2);
      if (i % 2 === 0) {
        gameBoard.splice(i, 0, <SenetCell key={i}
          colour="blackCell" id={i}
          piece={(whitePieces[index - 1] && whitePieces[index - 1].position === i) ? whitePieces[index - 1].id : null}
          />
        )
      }
      else {
        gameBoard.splice(i, 0, <SenetCell key={i}
          colour="whiteCell" id={i} 
          piece={(blackPieces[index] && blackPieces[index].position === i) ? blackPieces[index].id : null}
           />
        )
      }
    }

    const gameBoardEnd = gameBoard.splice(20, 10);

    const newGameBoard = gameBoard.splice(0, 10)
      .concat(gameBoard.reverse())
      .concat(gameBoardEnd);

    return newGameBoard;
  }

  return (
    <>
      <h4>SenetBoard</h4>
      <ul className="senetBoard">{whitePieces ? createBoard() : null}</ul>
      <SenetPlayerPosition
        whitePieces={whitePieces}
        blackPieces={blackPieces}
        diceRoll={diceRoll}
      />
    </>
  )
}

export default SenetBoard;