import React from 'react';

const SenetPlayerPosition = ({ pieces, cells, diceRoll, selectedPiece }) => {

  // calculates result of a dice roll
  function calculateMoveDistance() {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
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

  // calculates what square the selected piece is on
  function calculateCurrentSquare() {
    if (selectedPiece) {
      const currentSquare = cells.find(cell => {
        return selectedPiece.id === cell.piece;
      })
      return currentSquare.id;
    }
  }

  // calculates the new square a piece can travel to
  function calculateMove() {
    if (selectedPiece) {
      const newSquare = calculateMoveDistance() + calculateCurrentSquare();
      return newSquare;
    }
  }

  // calculates whether a move is legal
  function isMoveLegal() {
    const newSquare = calculateMove();
    if (selectedPiece && diceRoll && cells) {
      const pieceOnNewSquare = cells[newSquare - 1].piece;
      if (pieceOnNewSquare && pieces[pieceOnNewSquare - 1].colour === selectedPiece.colour) {
        return false;
      }
      return true;
    }
  }

  return (
    <>
      <p>Can move to: {calculateMove()}</p>
      <p>Piece on new square: {isMoveLegal()}</p>
    </>
  )

}

export default SenetPlayerPosition;