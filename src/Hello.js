import React, { Component } from 'react';
import './Hello.css';

class Hello extends Component {
  render() {
    return(
      <div className="f1 tc">
        <h1>hola mundo</h1>
        <p>do you speak {this.props.language}?</p>
      </div>
    )
  }
}

export default Hello;
