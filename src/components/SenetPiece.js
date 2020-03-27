import React from 'react';

const SenetPiece = ({ colour, id, selectPiece, possiblePieces }) => {

  function shouldHighlight() {
    if (possiblePieces) {
      const releventPiece = possiblePieces.find(piece => {
        return piece.id === id;
      })
      return releventPiece;
    }
  }

  const array = [
    colour,
    shouldHighlight() ? "highlight" : null
  ];
  const classArray = array.join(' ');

  function handleSelectPiece() {
    selectPiece(id);
  }

  return (
    <p className={classArray} onClick={handleSelectPiece}>{id}</p>
  )
}

export default SenetPiece;