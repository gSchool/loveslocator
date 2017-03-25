import React, { Component } from 'react';
import LocationBar from './LocationBar';
import LocationTypeBar from './LocationTypeBar';
import AmenitiesBar from './AmenitiesBar';
import RestaurantsBar from './RestaurantsBar';

export default class SearchOptions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            city: undefined,
            state: undefined,
            highway: undefined,
            locationTypes: {},
            amenities: {},
            restaurants: {}
        };
        this.locationTypeChange = this.locationTypeChange.bind(this);
        this.amenitiesChange = this.amenitiesChange.bind(this);
        this.restaurantsChange = this.restaurantsChange.bind(this);
        this.locationChange = this.locationChange.bind(this);
        this.search = this.search.bind(this);
    }

    locationChange(state, city, highway) {
        console.log('location change=', arguments);
        const s = JSON.parse(JSON.stringify(this.state));
        s.state = state;
        s.city = city;
        s.highway = highway;
        this.setState(s);
    }

    locationTypeChange(locationTypes) {
        const state = JSON.parse(JSON.stringify(this.state));
        state.locationTypes = locationTypes;
        this.setState(state);
    }

    amenitiesChange(amenities) {
        const state = JSON.parse(JSON.stringify(this.state));
        state.amenities = amenities;
        this.setState(state);
    }

    restaurantsChange(restaurants) {
        const state = JSON.parse(JSON.stringify(this.state));
        state.restaurants = restaurants;
        console.log('SearchOptions.restaurantsChange state=', state);
        this.setState(state);
    }

    clear() {
        this.props.onClear();
    }

    search() {
        this.props.onSearch(this.state);
    }

    render() {
        return (
            <div>
                <LocationBar onChange={this.locationChange} state={this.state.state} state={this.state.city} state={this.state.highway} />
                <hr />
                <LocationTypeBar onChange={this.locationTypeChange} locationTypes={this.state.locationTypes} />
                <hr />
                <AmenitiesBar onChange={this.amenitiesChange} amenities={this.state.amenities} />
                <hr />
                <RestaurantsBar onChange={this.restaurantsChange} restaurants={this.state.restaurants} />
                <hr />
                <button onClick={this.clear}>Clear</button>
                <button onClick={this.search}>Search</button>
            </div>
        );
    }
}

