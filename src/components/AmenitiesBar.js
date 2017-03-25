import React, { Component } from 'react';

export default class AmenitiesBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            amenities: []
        };
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
                <div key={i} style={{margin: '10px'}}>
                    <input type="checkbox" id={`s${i}`} class="left" style={{marginRight: '10px'}} />
                    <label for={`s${i}`}>{type.Name}</label>
                </div>
            )
        });
    }

    render() {
        return (
            <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                <h4>Select Amenities:</h4>
                <div style={{ display: "flex", flexDirection: "row", flexWrap: 'wrap' }} >
                    {this.amenityCodes}
                </div>
            </div>
        );
    }
}
