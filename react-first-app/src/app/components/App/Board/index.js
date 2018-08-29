import React from 'react';

import './styles.css';

import Square from '../Square';

class Board extends React.Component {
  handleClick = i => this.props.onClick(i);

  render() {
    return (
      <div>
        <div className="board-row">
          <Square index={0} value={this.props.squares[0]} onClick={this.handleClick} />
          <Square index={1} value={this.props.squares[1]} onClick={this.handleClick} />
          <Square index={2} value={this.props.squares[2]} onClick={this.handleClick} />
        </div>
        <div className="board-row">
          <Square index={3} value={this.props.squares[3]} onClick={this.handleClick} />
          <Square index={4} value={this.props.squares[4]} onClick={this.handleClick} />
          <Square index={5} value={this.props.squares[5]} onClick={this.handleClick} />
        </div>
        <div className="board-row">
          <Square index={6} value={this.props.squares[6]} onClick={this.handleClick} />
          <Square index={7} value={this.props.squares[7]} onClick={this.handleClick} />
          <Square index={8} value={this.props.squares[8]} onClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default Board;
