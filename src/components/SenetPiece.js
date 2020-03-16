import React from 'react';

const SenetPiece = ({ colour, id, currentPosition, changePiecePosition, selectPiece }) => {

  // function handleMovePiece() {
  //   changePiecePosition(id, currentPosition, 11);
  // }

  function handleSelectPiece() {
    selectPiece(id);
  }

  return (
    <p className={colour} onClick={handleSelectPiece}>{id}</p>
  )
}

export default SenetPiece;