import React from 'react';
import SenetPiece from './SenetPiece';

const SenetCell = ({ colour, id, piece }) => {

  return (
      <li className={colour}>
        {id}
       { piece ? <SenetPiece colour={piece < 6 ? "whitePieces" : "blackPieces"}/> : null }
      </li>
  )
}

export default SenetCell;