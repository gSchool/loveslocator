import React, { Component } from 'react';
import SimpleMap from './SimpleMap'
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{ width: '100%', height: '400px' }}>
          <SimpleMap />
        </div>
      </div>
    );
  }
}
