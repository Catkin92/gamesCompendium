import React, {Component} from 'react';
import SenetBoard from '../components/SenetBoard';
import SenetRoll from '../components/SenetRoll';

class SenetGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      diceRoll: [],
      whitePieces: [
        { id: 1, position: 2 },
        { id: 2, position: 4 },
        { id: 3, position: 6 },
        { id: 4, position: 8 },
        { id: 5, position: 10 }
      ],
      blackPieces: [
        { id: 6, position: 1 },
        { id: 7, position: 3 },
        { id: 8, position: 5 },
        { id: 9, position: 7 },
        { id: 10, position: 9 }
      ],
      winner: null
    }
    this.changeDiceRoll = this.changeDiceRoll.bind(this);
  }

  changeDiceRoll(roll) {
    console.log(roll);
    this.setState({ diceRoll: roll });
  }

  render() {
    return (
      <>
        <h3>SenetGame</h3>
        <SenetBoard 
          whitePieces={this.state.whitePieces}
          blackPieces={this.state.blackPieces}
        />
        <SenetRoll 
          changeDiceRoll={this.changeDiceRoll}
          diceRoll={this.state.diceRoll}
        />
      </>
    )
  }
}

export default SenetGame;