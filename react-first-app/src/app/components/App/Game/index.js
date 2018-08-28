/*import React, { Component } from 'react';

import logo from '../../../../logo.svg';

import style from './styles.css';

import Board from '../Board';

import { SQUARE_VALUES } from '../constants.js';

import { calculateWinner } from '../utils.js';

class Game extends React.Component {
  state = {
    history: [
      {
        squares: Array(9).fill(null)
      }
    ],
    stepNumber: 0,
    xIsNext: true
  };

  history = state.history;
  current = history[state.stepNumber];
  winner = calculateWinner(current.squares);


  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = [...current.squares];
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? SQUARE_VALUES.X : SQUARE_VALUES.O;
    this.setState({
      history: [...history, [{ squares }]],
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  getStatus() {
    if (this.winner) {
      return "Winner: " + this.winner;
    
    return `Next player: ${this.state.xIsNext ? SQUARE_VALUES.X : SQUARE_VALUES.O}`;
  }

  getDesc(move) {
    const desc = move ?
        'Go to move #' + move :
        'Go to game start';
    return desc;
  }
  
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={i => this.handleClick(i)} />
        </div>
        <div className="game-info">
          {this.getStatus()}
          <ol>
            {history.map((step, move) => (
              <li key={move}>
                <button onClick={() => this.jumpTo(move)}>{this.getDesc(move)}</button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Game;*/
