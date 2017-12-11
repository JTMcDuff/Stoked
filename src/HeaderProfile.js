import React, { Component } from 'react';
import style from './style.css';

class HeaderProfile extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: [] 
    };
  }

  render() {
    return (
      <div>
      <p> Hello, name! </p>
      <p> I'm a pic! </p>
      </div>
    )
  }
}

export default HeaderProfile;