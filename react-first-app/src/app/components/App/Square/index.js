import React, { Component } from 'react';

import logo from '../../../../logo.svg';

import style from './styles.css';

function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
