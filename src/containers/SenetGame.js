import React, {Component} from 'react';
import SenetBoard from '../components/SenetBoard';
import SenetRoll from '../components/SenetRoll';

class SenetGame extends Component {
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

  render() {
    return (
      <>
      <h3>SenetGame</h3>
      <SenetBoard 
        whitePieces={this.state.whitePieces}
        blackPieces={this.state.blackPieces}
      />
      <SenetRoll />
      </>
    )
  }
}

export default SenetGame;