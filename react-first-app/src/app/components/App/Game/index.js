import React from 'react';

import Board from '../Board';
import { SQUARE_VALUES } from '../constants';
import { calculateWinner } from '../utils';

import { getDesc } from './utils';
import './styles.css';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      winner: null,
      stepNumber: 0,
      xIsNext: true
    };
  }

  getStatus() {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = [...current.squares];
    if (calculateWinner(squares)) {
      return `Winner: ${this.state.winner}`;
    }
    return `Next player: ${this.state.xIsNext ? SQUARE_VALUES.X : SQUARE_VALUES.O}`;
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = [...current.squares];
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? SQUARE_VALUES.X : SQUARE_VALUES.O;
    this.setState({
      history: [...history, { squares }],
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
    const winner = calculateWinner(squares);
    if (winner) {
      this.setState({
        winner
      });
    }
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={this.handleClick} />
        </div>
        <div className="game-info">
          {this.getStatus()}
          <ol>
            {history.map((step, move) => (
              <li key={step}>
                <button onClick={() => this.jumpTo(move)}>{getDesc(move)}</button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Game;
