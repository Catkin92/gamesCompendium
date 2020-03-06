import React from 'react';
import SenetPiece from './SenetPiece';

const SenetPlayerPosition = ({ whitePieces, blackPieces }) => {

  const whitePlayer = whitePieces.map( ({ id }) => {
   return <SenetPiece key={id} colour="whitePiece"/>
  })

  const blackPlayer = blackPieces.map( ({ id }) => {
   return <SenetPiece key={id} colour="blackPiece"/>
  })

  return (
    <>
    <p>SenetPlayerPosition</p>
    <ul>{whitePlayer}</ul>
    <ul>{blackPlayer}</ul>
    </>
  )

}

export default SenetPlayerPosition;