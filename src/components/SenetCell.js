import React from 'react';
import SenetPiece from './SenetPiece';

const SenetCell = ({ colour, id, piece, changePiecePosition }) => {
// colour = colour of senet cell
// id = id of senet cell
// piece = id of senet piece

  return (
      <li className={colour}>
        {id}
       { piece ? <SenetPiece changePiecePosition={changePiecePosition} id={piece} colour={piece < 6 ? "whitePieces" : "blackPieces"}/> : null }
      </li>
  )
}

export default SenetCell;