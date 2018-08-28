import React, { Component } from 'react';

import logo from '../../../../logo.svg';

import style from './styles.css';

import Square from '../Square';

class Board extends React.Component {
  handleClick = i => this.props.onClick(i);

  render() {
    return (
      <div>
        <div className="board-row">
          <Square value={this.props.squares[0]} onClick={() => this.handleClick(0)}/>
          <Square value={this.props.squares[1]} onClick={() => this.handleClick(1)}/>
          <Square value={this.props.squares[2]} onClick={() => this.handleClick(2)}/>
        </div>
        <div className="board-row">
          <Square value={this.props.squares[3]} onClick={() => this.handleClick(3)}/>
          <Square value={this.props.squares[4]} onClick={() => this.handleClick(4)}/>
          <Square value={this.props.squares[5]} onClick={() => this.handleClick(5)}/>
        </div>
        <div className="board-row">
          <Square value={this.props.squares[6]} onClick={() => this.handleClick(6)}/>
          <Square value={this.props.squares[7]} onClick={() => this.handleClick(7)}/>
          <Square value={this.props.squares[8]} onClick={() => this.handleClick(8)}/>
        </div>
      </div>
    );
  }
}

export default Board;
