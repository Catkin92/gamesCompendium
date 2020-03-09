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
    return gameBoard;
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