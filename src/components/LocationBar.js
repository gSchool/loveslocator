import React, { Component } from 'react';

const DEFAULT_STATE = {Name: 'Select a State', Abbreviation: ''};

export default class LocationBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
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
            states.unshift(DEFAULT_STATE);
            this.setState(Object.assign({}, this.state, {
                states: states
            }));
        } catch (ex) {
            console.error(ex);
        }
    }

    async populateCities(state) {
        try {
            if (state.Abbreviation) {
                const cities = await (await fetch(`/api/cities?state=${state.Abbreviation}`)).json();
                this.setState(Object.assign({}, this.state, {
                    cities: cities
                }));
            } else {
                this.setState(Object.assign({}, this.state, {
                    cities: []
                }));
            }
        } catch (ex) {
            console.error(ex);
        }
    }

    stateSelect(ev) {
        const state = this.state.states.filter((state) => state.Abbreviation === ev.target.value)[0];
        this.props.onChange(state.Abbreviation, undefined, undefined);
        this.populateCities(state);
    }

    citySelect(ev) {
        this.props.onChange(this.props.state, ev.target.value, undefined);
    }

    get stateCodes() {
        return this.state.states && this.state.states.map((state, i) => {
            return <option key={i} value={state.Abbreviation}>{state.Name}</option>
        });
    }

    get cityCodes() {
        return this.state.cities && this.state.cities.map((city, i) => <option key={i}>{city.City}</option>);
    }

    render() {
        return (
            <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                <h4>Select Location:</h4>
                <select value={this.props.state} onChange={this.stateSelect} >
                    {this.stateCodes}
                </select>
                <select value={this.props.city} onChange={this.citySelect} >
                    {this.cityCodes}
                </select>
            </div>
        );
    }
}
