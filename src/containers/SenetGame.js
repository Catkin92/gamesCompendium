import React, { Component } from 'react';
import SenetBoard from '../components/SenetBoard';
import SenetRoll from '../components/SenetRoll';

class SenetGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      diceRoll: [],
      pieces: [
        { id: 1, colour: "white" },
        { id: 2, colour: "white" },
        { id: 3, colour: "white" },
        { id: 4, colour: "white" },
        { id: 5, colour: "white" },
        { id: 6, colour: "black" },
        { id: 7, colour: "black" },
        { id: 8, colour: "black" },
        { id: 9, colour: "black" },
        { id: 10, colour: "black" }
      ],
      cells: [
        { id: 1, piece: 1 }, { id: 2, piece: 6 }, { id: 3, piece: 2 },
        { id: 4, piece: 7 }, { id: 5, piece: 3 }, { id: 6, piece: 8 },
        { id: 7, piece: 4 }, { id: 8, piece: 9 }, { id: 9, piece: 5 },
        { id: 10, piece: 10 }, { id: 11, piece: null }, { id: 12, piece: null },
        { id: 13, piece: null }, { id: 14, piece: null }, { id: 15, piece: null },
        { id: 16, piece: null }, { id: 17, piece: null }, { id: 18, piece: null },
        { id: 19, piece: null }, { id: 20, piece: null }, { id: 21, piece: null },
        { id: 22, piece: null }, { id: 23, piece: null }, { id: 24, piece: null },
        { id: 25, piece: null }, { id: 26, piece: null }, { id: 27, piece: null },
        { id: 28, piece: null }, { id: 29, piece: null }, { id: 30, piece: null }

      ],
      winner: null,
      turnCounter: "white",
      selectedPiece: null
    }
    this.changeDiceRoll = this.changeDiceRoll.bind(this);
    this.changePiecePosition = this.changePiecePosition.bind(this);
    this.selectPiece = this.selectPiece.bind(this);
  }

  changeDiceRoll(roll) {
    this.setState({ diceRoll: roll });
  }

  isMoveLegal(currentPosition, newPosition) {
    const newId = this.state.cells[newPosition - 1].piece;
    const currentId = this.state.cells[currentPosition - 1].piece;
    if ((!newId || !currentId) || this.state.pieces[newId - 1].colour !== this.state.pieces[currentId - 1].colour) {
      return true;
    }
    return false;
  }

  changePiecePosition(pieceId, currentPosition, newPosition) {

    if (this.isMoveLegal(currentPosition, newPosition)) {
      this.setState(previousState => {
        const cells = [...previousState.cells];
        cells[currentPosition - 1].piece = cells[newPosition - 1].piece;
        cells[newPosition - 1].piece = pieceId;
        return { cells };
      })
    }
  }

  selectPiece(id) {
    this.setState({ selectedPiece: this.state.pieces[id - 1]});
  }

  render() {
    return (
      <>
        <h3>SenetGame</h3>
        <SenetBoard
          pieces={this.state.pieces}
          cells={this.state.cells}
          diceRoll={this.state.diceRoll}
          changePiecePosition={this.changePiecePosition}
          selectPiece={this.selectPiece}
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