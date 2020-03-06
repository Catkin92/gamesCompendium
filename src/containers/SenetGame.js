import React, {Component} from 'react';
import SenetBoard from '../components/SenetBoard';

class SenetGame extends Componenet {
  constructor(props) {
    super(props);
    this.state = {
      diceRoll: [],
      whitePieces: [
        { id: 1, position: null },
        { id: 2, position: null },
        { id: 3, position: null },
        { id: 4, position: null },
        { id: 5, position: null }
      ],
      blackPieces: [
        { id: 1, position: null },
        { id: 2, position: null },
        { id: 3, position: null },
        { id: 4, position: null },
        { id: 5, position: null }
      ],
      winner: null
    }
  }
}

export default SenetGame;