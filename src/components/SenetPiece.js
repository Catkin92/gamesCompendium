import React from 'react';

const SenetPiece = ({ colour, id, movePiece, possiblePieces }) => {

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

  function handleMovePiece() {
    movePiece(id);
  }

  return (
    <p className={classArray} onClick={handleMovePiece}>{id}</p>
  )
}

export default SenetPiece;