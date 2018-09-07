import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Board from '../Board';
import { SQUARE_VALUES } from '../constants';
import { calculateWinner } from '../utils';
import changeStep from '../../../../redux/tictactoe/actions.js';

import { getDesc } from './utils';
import './styles.css';

import { connect } from 'react-redux';

import { changeStep, resetGame } from '../../../../redux/tictactoe/actions.js';

import NavBar from '~components/App/Navbar';

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

  componentWillUnmount() {
    this.props.dispatch(resetGame());
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
      history: [...history, { squares }]
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
    this.props.dispatch(changeStep(step, step % 2 === 0));
  }

  render() {
    const history = this.state.history;
    const current = history[this.props.stepNumber];

    return (
      <div className="game">
        <NavBar />
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

<<<<<<< 8de10c2cc88d5c96dc681b1eaa63110200e0d490
Game.propTypes = {
  xIsNext: PropTypes.bool,
  stepNumber: PropTypes.number
};

=======
>>>>>>> topbar finished, still is missing the rebase with routing1
const mapStateToProps = state => ({
  stepNumber: state.tictactoe.stepNumber,
  xIsNext: state.tictactoe.xIsNext
});

export default connect(mapStateToProps)(Game);
