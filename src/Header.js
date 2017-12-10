// Header.js holds the title and quick access buttons.

import React, { Component } from 'react';
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
      
      <h1> Stoked </h1>
      </div>
    )
  }
}

export default App;