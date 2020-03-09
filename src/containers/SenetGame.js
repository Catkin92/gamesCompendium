import React, {Component} from 'react';
import SenetBoard from '../components/SenetBoard';
import SenetRoll from '../components/SenetRoll';
import SenetPiece from '../components/SenetPiece';

class SenetGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      diceRoll: [],
      whitePieces: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 }
      ],
      blackPieces: [
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
        { id: 10 }
      ],
      cells: [
        { id: 1, piece: 6 }, { id: 2, piece: 1 }, { id: 3, piece: 7 },
        { id: 4, piece: 2 }, { id: 5, piece: 8 }, { id: 6, piece: 3 },
        { id: 7, piece: 9 }, { id: 8, piece: 4 }, { id: 9, piece: 10 },
        { id: 10, piece: 5 }, { id: 11, piece: null }, { id: 12, piece: null },
        { id: 13, piece: null }, { id: 14, piece: null }, { id: 15, piece: null },
        { id: 16, piece: null }, { id: 17, piece: null }, { id: 18, piece: null },
        { id: 19, piece: null }, { id: 20, piece: null }, { id: 21, piece: null },
        { id: 22, piece: null }, { id: 23, piece: null }, { id: 24, piece: null },
        { id: 25, piece: null }, { id: 26, piece: null }, { id: 27, piece: null },
        { id: 28, piece: null }, { id: 29, piece: null }, { id: 30, piece: null }
        
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

  changePiecePosition(pieceId, currentPosition, newPosition) {

    this.setState(previousState => {
      const cells = [...previousState.cells];
      cells[currentPosition - 1].piece = null;
      cells[newPosition - 1].piece = pieceId;
      console.log(cells[currentPosition - 1]);
      console.log(cells[newPosition - 1]);
      return { cells };
    })
  }

  render() {
    return (
      <>
        <h3>SenetGame</h3>
        <SenetBoard 
          whitePieces={this.state.whitePieces}
          blackPieces={this.state.blackPieces}
          cells={this.state.cells}
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