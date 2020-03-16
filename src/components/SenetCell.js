import React from 'react';
import SenetPiece from './SenetPiece';

const SenetCell = ({ colour, id, piece, changePiecePosition, selectPiece, possibleSquares }) => {

  const array = [
    colour,
    possibleSquares === id ? "highlight" : null
  ];
  const classArray = array.join(' ');

  return (
    <li className={classArray}>
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