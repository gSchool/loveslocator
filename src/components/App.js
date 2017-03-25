import React, { Component } from 'react';
import Map from './Map';
import SearchOptions from './SearchOptions';
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      filter: {}
    };
    this.search = this.search.bind(this);
  }

  async componentDidMount() {
    try {
      const locations = await (await fetch('/api/locations')).json();
      this.setState(Object.assign({}, this.state, {
        locations: locations
      }));
    } catch (ex) {
      console.error(ex);
    }
  }

  clear() {
    const state = JSON.parse(JSON.stringify(this.state));
    state.filter = {};
    this.setState(state);
  }

  async search(filter) {
    const storeTypes = Object.keys(filter.locationTypes).filter((type) => filter.locationTypes[type]);

    const payload = {
      "StoreTypes": storeTypes,
      "Amenities": [
        //"Commercial Truck Oil Cha",
        //"ATM"
      ],
      "Restaurants": [
        //"Arby's"
      ],
      //"State": "OK",
      //"City": "Colbert ",
      //"Highway": "Hwy 169"
    };

    try {
      const stream = await fetch("/api/locations/search", {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(payload)
      });
      const locations = await stream.json();
      this.setState(Object.assign({}, this.state, {
        locations: locations
      }));
    } catch (ex) {
      console.error(ex);
    }
  }

  render() {
    return (
      <div className="App">
        <div style={{ width: '100%', height: '400px' }}>
          <Map locations={this.state.locations} />
          <SearchOptions onClear={this.clear} onSearch={this.search} />
        </div>
      </div>
    );
  }
}
