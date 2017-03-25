import React, { Component } from 'react';

export default class LocationBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedState: undefined,
            states: [],
            cities: []
        };
        this.stateSelect = this.stateSelect.bind(this);
        this.citySelect = this.citySelect.bind(this);
        this.populateCities = this.populateCities.bind(this);
    }

    componentDidMount() {
        this.populateStates();
    }

    async populateStates() {
        try {
            const states = await (await fetch('/api/states')).json();
            this.setState(Object.assign({}, this.state, {
                states: states
            }));
        } catch (ex) {
            console.error(ex);
        }
    }

    async populateCities(state) {
        try {
            const cities = await (await fetch(`/api/cities?state=${state.Abbreviation}`)).json();
            console.log(cities);
            this.setState(Object.assign({}, this.state, {
                cities: cities
            }));
        } catch (ex) {
            console.error(ex);
        }
    }

    stateSelect(ev) {
        const state = this.state.states.filter((state) => state.Name === ev.target.value)[0];
        this.setState(Object.assign({}, this.state, {
            selectedState: state
        }));
        this.populateCities(state);
    }

    citySelect(ev) {
        const city = this.state.cities.filter((city) => city.City === ev.target.value)[0];
        this.setState(Object.assign({}, this.state, {
            selectedCity: city
        }));
    }

    get stateCodes() {
        return this.state.states && this.state.states.map((state, i) => <option key={i}>{state.Name}</option>);
    }

    get cityCodes() {
        return this.state.cities && this.state.cities.map((city, i) => <option key={i}>{city.City}</option>);
    }

    get selectedStateName() {
        return this.state.selectedState && this.state.selectedState.Name;
    }

    get selectedCityName() {
        return this.state.selectedCity && this.state.selectedCity.City;
    }

    render() {
        return (
            <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                <h4>Select Location:</h4>
                <select value={this.selectedStateName} onChange={this.stateSelect}>
                    {this.stateCodes}
                </select>
                <select value={this.selectedCityName} onChange={this.citySelect}>
                    {this.cityCodes}
                </select>
            </div>
        );
    }
}
