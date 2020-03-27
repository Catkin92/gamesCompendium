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
      turnCounter: "black",
      selectedPiece: null,
      possiblePieces: []
    }
    this.changeDiceRoll = this.changeDiceRoll.bind(this);
    // this.changePiecePosition = this.changePiecePosition.bind(this);
    // this.changePossibleSquares = this.changePossibleSquares.bind(this);
    this.movePiece = this.movePiece.bind(this);
  }

  changeDiceRoll(roll) {
    this.setState({ diceRoll: roll }, () => {
      console.log(`Dice roll state: ${this.state.diceRoll}`)
      console.log(`Possible pieces state: ${this.state.possiblePieces}`)
      this.calculatePossiblePieces();
    });
  }

  calculateMoveDistance() {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let moveDistance = 0;
    moveDistance = this.state.diceRoll.reduce(reducer);
    if (moveDistance === 0) {
      moveDistance = 6;
    }
    return moveDistance;
  }

  calculatePossiblePieces() {
    const piecesArray = this.state.pieces.filter(piece => {
      return piece.colour === this.state.turnCounter &&
      this.isMoveLegal(piece);
    });
    this.setState({ possiblePieces: piecesArray });
  }

  calculateCurrentSquare(pieceId) {
    const currentSquare = this.state.cells.find(cell => {
        return pieceId === cell.piece;
      })
    return currentSquare.id;
  }

  calculateMove(pieceId) {
    const newSquare = this.calculateMoveDistance() + this.calculateCurrentSquare(pieceId);
    return newSquare;
  }

  isMoveLegal(piece) {
    const newSquare = this.calculateMove(piece.id);
    if (this.state.cells) {
      const pieceOnNewSquare = this.state.cells[newSquare - 1].piece;
      if (pieceOnNewSquare && this.state.pieces[pieceOnNewSquare - 1].colour === piece.colour) {
        return false;
      }
    } 
    return true;
  }

  movePiece(pieceId) {
    const currentPosition = this.calculateCurrentSquare(pieceId);
    const newCellId = this.calculateMove(pieceId);
    const piecesIds = this.state.possiblePieces.map(piece => {
      return piece.id;
    })
    if (this.isMoveLegal(this.state.pieces[pieceId - 1]) && piecesIds.includes(pieceId)) {
      this.setState(prevState => {
        const cells = [...prevState.cells];
        const pieceOnNewSquare = cells[newCellId - 1].piece;
        cells[currentPosition - 1].piece = pieceOnNewSquare;
        cells[newCellId - 1].piece = pieceId;
        return { cells };
      })
      this.setState({ turnCounter: "black" ? "white" : "black"})
    }

  }

  // changePossibleSquares(array) {
  //   this.setState({ possibleSquares: array });
  // }

  // highlightSquare() {
  //   const newSquare = this.calculateMove();
  //   const square = this.isMoveLegal() ? newSquare : null;
  //   this.setState({ possibleSquares: square });
  // }

  // selectPiece(id) {
  //   const piece = this.state.pieces[id - 1];
  //   this.setState({ selectedPiece: piece }, () => {
  //     this.highlightSquare();
  //   });
  // }


  render() {
    return (
      <>
        <h3>SenetGame</h3>
        <SenetBoard
          pieces={this.state.pieces}
          cells={this.state.cells}
          diceRoll={this.state.diceRoll}
          selectedPiece={this.state.selectedPiece}
          turnCounter={this.state.turnCounter}
          possiblePieces={this.state.possiblePieces}
          changePiecePosition={this.changePiecePosition}
          movePiece={this.movePiece}
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