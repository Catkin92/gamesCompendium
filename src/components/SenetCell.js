import React from 'react';

const SenetCell = ({ colour, id }) => {

  return (
      <li className={colour}>
        {id}
      </li>
  )
}

export default SenetCell;