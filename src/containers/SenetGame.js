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
      selectedPiece: null,
      possibleSquares: []
    }
    this.changeDiceRoll = this.changeDiceRoll.bind(this);
    this.changePiecePosition = this.changePiecePosition.bind(this);
    this.selectPiece = this.selectPiece.bind(this);
  }

  changeDiceRoll(roll) {
    this.setState({ diceRoll: roll });
  }

  // calculates the number of squares a piece can move
  calculateMoveDistance() {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let moveDistance = 0;

    if (this.state.diceRoll.length !== 0) {
      moveDistance = this.state.diceRoll.reduce(reducer);
      if (moveDistance === 0) {
        moveDistance = 6;
      }
    }
    else {
      return null;
    }
    return moveDistance;
  }

  // sets state for piece clicked then calls highlightSquare
  selectPiece(id) {
    const piece = this.state.pieces[id - 1];
    this.setState({ selectedPiece: piece }, 
      this.highlightSquare()
    );
  }

  // calculates what square the selected piece is on
  calculateCurrentSquare() {
    if (this.state.selectedPiece) {
      const currentSquare = this.state.cells.find(cell => {
        return this.state.selectedPiece.id === cell.piece;
      })
      return currentSquare.id;
    }
  }

  // calculates where a piece can move to given the dice roll
  calculateMove() {
    if (this.state.selectedPiece) {
      const array = [];
      const newSquare = this.calculateMoveDistance() + this.calculateCurrentSquare();
      array.push(newSquare);
      const backSquare = this.calculateCurrentSquare() - this.calculateMoveDistance();
      array.push(backSquare);
      return array;
    }
  }

  // checks whether a piece can move to a square
  isMoveLegal(index) {
    const moveArray = this.calculateMove();
    if (this.state.selectedPiece && this.state.diceRoll && this.state.cells) {
      const pieceOnNewSquare = this.state.cells[moveArray[index] - 1] >= 0 ? 
        this.state.cells[moveArray[index] - 1].piece : null;
      if (pieceOnNewSquare && 
          this.state.pieces[pieceOnNewSquare - 1].colour === this.state.selectedPiece.colour) {
        return false;
      }
      return true;
    }
  }

  // sets state of possible squares a piece can move to
  highlightSquare() {
    const newSquares = this.calculateMove();
    const array = []
    for (let i = 0; i < 2; i++) {
      const square = this.isMoveLegal(i) ? newSquares[i] : null;
      array.push(square);
    }
    this.setState({ possibleSquares: array });
  }

  // on click moves the selected piece to a new square, and swaps places with any piece on new square
  changePiecePosition(newCellId) {
    console.log(this.state.possibleSquares);
    console.log(newCellId);
    const currentPosition = this.calculateCurrentSquare();
      if (this.state.possibleSquares.length !== 0 && newCellId === this.state.possibleSquares[0 || 1]) {
        this.setState(prevState => {
          var cells = [...prevState.cells];
          const pieceOnNewSquare = cells[newCellId - 1].piece;
          cells[currentPosition - 1].piece = pieceOnNewSquare;
          cells[newCellId - 1].piece = this.state.selectedPiece.id;
          return { cells };
      })
    }
  }

  render() {
    return (
      <>
        <h3>SenetGame</h3>
        <SenetBoard
          pieces={this.state.pieces}
          cells={this.state.cells}
          diceRoll={this.state.diceRoll}
          selectedPiece={this.state.selectedPiece}
          possibleSquares={this.state.possibleSquares}
          changePiecePosition={this.changePiecePosition}
          selectPiece={this.selectPiece}
        />
        <SenetRoll
          diceRoll={this.state.diceRoll}
          changeDiceRoll={this.changeDiceRoll}
        />
      </>
    )
  }
}

export default SenetGame;