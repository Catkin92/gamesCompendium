import React from 'react';
import SenetPiece from './SenetPiece';

const SenetCell = ({ colour, id, piece, changePiecePosition, selectPiece, possibleSquares }) => {
  
  function classArray() {
    let array = [];
    if (possibleSquares) {
      array = [
        colour,
        possibleSquares[0] === id ? "highlight" : null,
        possibleSquares[1] === id ? "highlight" : null,
      ];
    } else {
        array = [
          colour
        ]
      }
    return array.join(' ');
  }

  function handleMovePiece() {
    changePiecePosition(id);
  }

  return (
    <li className={classArray()} onClick={handleMovePiece} >
      {id}
      {piece ? (
        <SenetPiece
          changePiecePosition={changePiecePosition}
          selectPiece={selectPiece}
          currentPosition={id}
          id={piece}
          colour={piece < 6 ? "whitePieces" : "blackPieces"}
        />) : (null)
      }
    </li>
  )
}
export default SenetCell;