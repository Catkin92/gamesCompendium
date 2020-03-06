import React from 'react';

const SenetPiece = ({ colour }) => {

  return (
    <li className={colour}>{ colour === "whitePiece" ? "W" : "B"}</li>
  )
}

export default SenetPiece;