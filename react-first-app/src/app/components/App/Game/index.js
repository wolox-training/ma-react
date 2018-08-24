import React from 'react';

import Board from '../Board';
import { SQUARE_VALUES } from '../constants';
import { calculateWinner } from '../utils';

import { getDesc } from './utils';
import './styles.css';

import { connect } from 'react-redux';

import changeStep from '../../../../redux/tictactoe/actions.js';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
<<<<<<< 6dde4c96ff7858e0cf039c479da181d33613d636
      ],
      winner: null,
      stepNumber: 0,
      xIsNext: true
=======
      ]
>>>>>>> redux finished, separated by folders
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
    const history = this.state.history.slice(0, this.props.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = [...current.squares];
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? SQUARE_VALUES.X : SQUARE_VALUES.O;
    this.setState({
      history: [...history, { squares }],
    });

    this.props.dispatch(changeStep(history.length, !this.props.xIsNext));
    const winner = calculateWinner(squares);
    if (winner) {
      this.setState({
        winner
      });
    }
  }

  jumpTo(step) {
    this.props.dispatch(changeStep(step, (step % 2) === 0));
  }

  render() {
    const history = this.state.history;
    const current = history[this.props.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.props.xIsNext ? "X" : "O");
    }

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

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const mapStateToProps = (state) => ({
  stepNumber: state.stepNumber,
  xIsNext: state.xIsNext
});
export default connect(mapStateToProps)(Game);
