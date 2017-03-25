import React, { Component } from 'react';
import Map from './Map';
import './App.css';
import LocationBar from './LocationBar';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="App">
        <div style={{ width: '100%', height: '400px' }}>
          <Map />
          <LocationBar />
        </div>
      </div>
    );
  }
}
