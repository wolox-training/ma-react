import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
};

export default Square;
