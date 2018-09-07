import React from 'react';

import './styles.css';

import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      <header className="navbar">
        <img src="wolox_logo.svg" alt="Wolox" className="wolox-logo" />
        <Link to="/login" className="logout"><span>Logout</span></Link>
        <Link to="/tictactoe" className="logout"><span>Game</span></Link>
        <Link to="/blank" className="logout"><span>Blank Page</span></Link>
      </header>
    );
  }
}

export default NavBar;
