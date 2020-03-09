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
      winner: null,
      turnCounter: "white"
    }
    this.findPieceIndex = this.findPieceIndex.bind(this);
    this.changeDiceRoll = this.changeDiceRoll.bind(this);
    this.changePiecePosition = this.changePiecePosition.bind(this);
  }

  findPieceIndex(id, array) {
    const findById = piece => piece.id === id;
    return array.findIndex(findById);
  }

  changeDiceRoll(roll) {
    this.setState({ diceRoll: roll });
  }

  changePiecePosition(id, newPosition) {
    const array = id < 6 ? "whitePieces" : "blackPieces";

    const index = this.findPieceIndex(id, this.state[array]);
    this.setState(previousState => {
      const pieces = [...previousState[array]];
      pieces[index].position = newPosition;
      return { pieces };
    })
  }

  render() {
    return (
      <>
        <h3>SenetGame</h3>
        <SenetBoard 
          whitePieces={this.state.whitePieces}
          blackPieces={this.state.blackPieces}
          diceRoll={this.state.diceRoll}
          changePiecePosition={this.changePiecePosition}
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