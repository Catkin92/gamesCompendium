import React from 'react';

const SenetPiece = ({ colour, id, currentPosition, changePiecePosition }) => {

  function handleMovePiece() {
    changePiecePosition(id, currentPosition, 11);
  }

  return (
    <p className={colour} onClick={handleMovePiece}>{id}</p>
  )
}

export default SenetPiece;