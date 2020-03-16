import React from 'react';

const SenetPiece = ({ colour, id, selectPiece }) => {

  function handleSelectPiece() {
    selectPiece(id);
  }

  return (
    <p className={colour} onClick={handleSelectPiece}>{id}</p>
  )
}

export default SenetPiece;