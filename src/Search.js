import React, { Component } from 'react';
import style from './style.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: [] 
    };
  }

  render() {
    return (
      <div class="Header">
      <p> I'm a search box! </p>
      </div>
    )
  }
}

export default Search;