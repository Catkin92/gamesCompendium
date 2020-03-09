import React from 'react';

const SenetPiece = ({ colour, id, changePiecePosition }) => {

  function handleMovePiece() {
    changePiecePosition(id, 11);
  }

  return (
    <p className={colour} onClick={handleMovePiece}>{id}</p>
  )
}

export default SenetPiece;