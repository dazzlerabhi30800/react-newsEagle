import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';

export default class App extends Component {
  c = 'abhi';
  render() {
    return (
      <div>
        Hello this is my first class based component {this.c}
      </div>
    );
  }
}



