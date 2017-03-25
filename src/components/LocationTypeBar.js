import React, { Component } from 'react';

export default class LocationTypeBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            types: []
        };
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

    get typeCodes() {
        return this.state.types && this.state.types.map((type, i) => {
            return (
                <div key={i}>
                    <input type="checkbox" id={`s${i}`} class="left" style={{marginRight: '10px'}} />
                    <label for={`s${i}`}>{type.Name}</label>
                </div>
            )
        });
    }

    render() {
        return (
            <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                <h4>Select Location Type:</h4>
                {this.typeCodes}
            </div>
        );
    }
}
