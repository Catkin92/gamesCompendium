import React from 'react';
import SenetPiece from './SenetPiece';

const SenetPlayerPosition = ({ whitePieces, blackPieces }) => {

  const whitePlayer = whitePieces.map( ({ id }) => {
   return <SenetPiece key={id} colour="whitePieces"/>
  })

  const blackPlayer = blackPieces.map( ({ id }) => {
   return <SenetPiece key={id} colour="blackPieces"/>
  })

  return (
    <>
    <p>SenetPlayerPosition</p>
    </>
  )

}

export default SenetPlayerPosition;