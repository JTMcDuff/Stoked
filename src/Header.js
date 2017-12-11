// Header.js holds the title and quick access buttons.

import React, { Component } from 'react';
import HeaderProfile from './HeaderProfile.js';
import Search from './Search.js';
import style from './style.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: [] 
    };
  }

  render() {
    return (
      <div class="Header">
      <HeaderProfile />
      <h1> Stoked </h1>
      <Search />
      </div>
    )
  }
}

export default Header;