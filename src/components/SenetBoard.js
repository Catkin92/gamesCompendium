import React from 'react';
import SenetCell from './SenetCell';
import SenetPlayerPosition from './SenetPlayerPosition';

const SenetBoard = ({ whitePieces, blackPieces, diceRoll, cells, changePiecePosition }) => {

  // creates checkered board and initial position of playing pieces
  function createBoard() {
    const gameBoard = cells.map(cell => {
      return <SenetCell 
        changePiecePosition={changePiecePosition}
        key={cell.id}
        id={cell.id}
        colour={cell.id % 2 ? "blackCell" : "whiteCell"}
        piece={cell.piece}
      />
    })

    const gameBoardEnd = gameBoard.splice(20, 10);
    const newGameBoard = gameBoard.splice(0, 10)
      .concat(gameBoard.reverse())
      .concat(gameBoardEnd);

    return newGameBoard;
    
  }

  return (
    <>
      <h4>SenetBoard</h4>
      <ul className="senetBoard">{createBoard()}</ul>
      <SenetPlayerPosition
        whitePieces={whitePieces}
        blackPieces={blackPieces}
        diceRoll={diceRoll}
      />
    </>
  )
}

export default SenetBoard;