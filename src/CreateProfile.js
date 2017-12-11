import React, { Component } from 'react';
import style from './style.css';

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: [] 
    };
  }

  render() {
    return (
      <div class="CreateProfile">
      <button> Create Profile </button>
      </div>
    )
  }
}

export default CreateProfile;