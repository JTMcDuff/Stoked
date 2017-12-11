// App.js
import React, { Component } from 'react';
import style from './style.css';
import Header from './Header.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: [] 
    };
  }
  // Needs to be added: Ability to find users, create users.
  render() {
    return (
      <div class="App">
      <Header />
      <h1> Stoked </h1>
      </div>
    )
  }
}

export default App;