import React, { Component } from 'react';

import './styles.css';

class Square extends Component {
  handleClick = () => this.props.onClick(this.props.index);

  render() {
    const { value } = this.props;
    return (
      <button className="square" onClick={this.handleClick}>
        {value}
      </button>
    );
  }
}

export default Square;
