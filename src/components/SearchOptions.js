import React, { Component } from 'react';
import LocationBar from './LocationBar';
import LocationTypeBar from './LocationTypeBar';
import AmenitiesBar from './AmenitiesBar';
import RestaurantsBar from './RestaurantsBar';

export default class SearchOptions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            locationTypes: {}
        };
        this.locationTypeChange = this.locationTypeChange.bind(this);
        this.search = this.search.bind(this);
    }

    locationTypeChange(locationTypes) {
        const state = JSON.parse(JSON.stringify(this.state));
        state.locationTypes = locationTypes;
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
                <LocationBar />
                <hr />
                <LocationTypeBar onChange={this.locationTypeChange} locationTypes={this.state.locationTypes} />
                <hr />
                <AmenitiesBar />
                <hr />
                <RestaurantsBar />
                <hr />
                <button onClick={this.clear}>Clear</button>
                <button onClick={this.search}>Search</button>
            </div>
        );
    }
}

