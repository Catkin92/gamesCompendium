import React from 'react';

const SenetCell = props => {

  function findClass() {
    colour === "white" ? whiteCell : blackCell;
  }

  return (
    <>
      <li className={findClass}></li>
    </>
  )
}

export default SenetCell;