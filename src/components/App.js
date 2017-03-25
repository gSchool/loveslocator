import React, { Component } from 'react';
import Map from './Map';
import SearchOptions from './SearchOptions';
import ResultList from './ResultList'
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      filter: undefined
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
    state.filter = undefined;
    this.setState(state);
  }

  async search(filter) {
    const storeTypes = Object.keys(filter.locationTypes).filter((type) => filter.locationTypes[type]);
    const amenities = Object.keys(filter.amenities).filter((type) => filter.amenities[type]);
    const restaurants = Object.keys(filter.restaurants).filter((type) => filter.restaurants[type]);
    console.log('search: ', filter);
    const payload = {
      "StoreTypes": storeTypes,
      "Amenities": amenities,
      "Restaurants": restaurants,
      "State": filter.state,
      "City": filter.city,
      "Highway": filter.highway
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
        filter: filter,
        locations: locations
      }));
    } catch (ex) {
      console.error(ex);
    }
  }

  get body() {
    return this.state.filter 
      ? <ResultList locations={this.state.locations.Points} />
      : <SearchOptions onClear={this.clear} onSearch={this.search} />;
  }

  render() {
    return (
      <div className="App">
        <div style={{ width: '100%', height: '400px' }}>
          <Map locations={this.state.locations} />
          {this.body}
        </div>
      </div>
    );
  }
}
