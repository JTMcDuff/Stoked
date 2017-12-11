import React, { Component } from 'react';
import style from './style.css';

class ChooseProfile extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: [] 
    };
  }

  render() {
    return (
      <div class="ChooseProfile">
      <button> Choose Profile </button>
      </div>
    )
  }
}

export default ChooseProfile;