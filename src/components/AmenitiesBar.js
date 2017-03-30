import React, { Component } from 'react';

export default class AmenitiesBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            amenities: []
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.populateTypes();
    }

    async populateTypes() {
        try {
            const amenities = await (await fetch('/api/amenities')).json();
            this.setState(Object.assign({}, this.state, {
                amenities: amenities
            }));
        } catch (ex) {
            console.error(ex);
        }
    }

    get amenityCodes() {
        return this.state.amenities && this.state.amenities.map((type, i) => {
            return (
                <div key={i}>
                    <input 
                        type="checkbox" 
                        id={`s${i}`} 
                        name={type.Name}
                        className="left" 
                        style={{marginRight: '10px'}} 
                        defaultChecked={this.props.amenities[type.Name]}
                        onChange={this.handleChange}
                        />
                    <label htmlFor={`s${i}`}>{type.Name}</label>
                </div>
            )
        });
    }

    handleChange(ev) {
        const amenities = Object.assign({}, this.props.amenities);
        amenities[ev.target.name] = ev.target.checked;
        this.props.onChange(amenities);
    }

    render() {
        // TODO: Remove <div/> and uncomment the code below! test
        return <div/>
        /*
        return (
            <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                <h4>Select Amenities:</h4>
                <div style={{ display: "flex", flexDirection: "row", flexWrap: 'wrap' }} >
                    {this.amenityCodes}
                </div>
            </div>
        );
        */
    }
}
