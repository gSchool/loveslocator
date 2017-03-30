import React, { Component } from 'react';

export default class LocationTypeBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            types: []
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.populateTypes();
    }

    async populateTypes() {
        try {
            const types = await (await fetch('/api/store/types')).json();
            this.setState(Object.assign({}, this.state, {
                types: types
            }));
        } catch (ex) {
            console.error(ex);
        }
    }

    handleChange(ev) {
        const locationTypes = Object.assign({}, this.props.locationTypes);
        locationTypes[ev.target.name] = ev.target.checked;
        this.props.onChange(locationTypes);
    }

    get typeCodes() {
        return this.state.types && this.state.types.map((type, i) => {
            return (
                <div key={i}>
                    <input 
                        type="checkbox" 
                        id={`s${i}`} 
                        name={type.Name}
                        className="left" 
                        style={{marginRight: '10px'}} 
                        defaultChecked={this.props.locationTypes[type.Name]}
                        onChange={this.handleChange}
                        />
                    <label htmlFor={`s${i}`}>{type.Name}</label>
                </div>
            )
        });
    }

    render() {
        // TODO: Remove <div/> and uncomment the code below!
        return <div/>
        /*
        return (
            <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                <h4>Select Location Type:</h4>
                {this.typeCodes}
            </div>
        );
        */
    }
}
