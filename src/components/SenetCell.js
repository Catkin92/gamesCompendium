import React from 'react';
import SenetPiece from './SenetPiece';

const SenetCell = ({ colour, id, piece, changePiecePosition, movePiece, possiblePieces }) => {

  return (
    <li className={colour}>
      {id}
      {piece ? (
        <SenetPiece
          changePiecePosition={changePiecePosition}
          possiblePieces={possiblePieces}
          movePiece={movePiece}
          currentPosition={id}
          id={piece}
          colour={piece < 6 ? "whitePieces" : "blackPieces"}
        />) : (null)
      }
    </li>
  )
}

export default SenetCell;