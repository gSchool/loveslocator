import React, { Component } from 'react';
import Map from './Map';
import './App.css';
import LocationBar from './LocationBar';
import LocationTypeBar from './LocationTypeBar';
import AmenitiesBar from './AmenitiesBar';
import RestaurantsBar from './RestaurantsBar';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  clear() {

  }

  render() {
    return (
      <div className="App">
        <div style={{ width: '100%', height: '400px' }}>
          <Map />
          <LocationBar />
          <hr/>
          <LocationTypeBar />
          <hr/>
          <AmenitiesBar />
          <hr/>
          <RestaurantsBar />
          <hr/>
          <button onPress={this.clear}>Clear</button>
          <button onPress={this.clear}>Search</button>
        </div>
      </div>
    );
  }
}
