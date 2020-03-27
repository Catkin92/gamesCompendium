import React from 'react';
import SenetPiece from './SenetPiece';

const SenetCell = ({ colour, id, piece, changePiecePosition, selectPiece, possiblePieces }) => {

  function handleMovePiece() {
    changePiecePosition(id);
  }

  return (
    <li className={colour} onClick={handleMovePiece} >
      {id}
      {piece ? (
        <SenetPiece
          changePiecePosition={changePiecePosition}
          possiblePieces={possiblePieces}
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