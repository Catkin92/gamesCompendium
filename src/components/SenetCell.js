import React from 'react';

const SenetCell = props => {

  function findClass() {
    colour === "white" ? whiteCell : blackCell;
  }

  return (
    <>
      <img className={findClass}></img>
    </>
  )
}

export default SenetCell;