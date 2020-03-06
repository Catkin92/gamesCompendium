import React from 'react';

const SenetPiece = ({ colour }) => {

  return (
    <p className={colour}>{ colour === "whitePieces" ? "W" : "B"}</p>
  )
}

export default SenetPiece;