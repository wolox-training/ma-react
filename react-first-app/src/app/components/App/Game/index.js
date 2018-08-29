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
      ],
      winner: null
    };
  }

  getStatus() {
    const history = this.state.history.slice(0, this.props.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = [...current.squares];
    if (calculateWinner(squares)) {
      return `Winner: ${this.state.winner}`;
    }
    return `Next player: ${this.props.xIsNext ? SQUARE_VALUES.X : SQUARE_VALUES.O}`;
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.props.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = [...current.squares];
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.props.xIsNext ? SQUARE_VALUES.X : SQUARE_VALUES.O;
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

const mapStateToProps = (state) => ({
  stepNumber: state.stepNumber,
  xIsNext: state.xIsNext
});
export default connect(mapStateToProps)(Game);
