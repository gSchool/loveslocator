import React, { Component } from 'react';

export default class ResultList extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    get results() {
        return this.props.locations && this.props.locations.map((location, i) => {
            return (
                <div key={i}>
                    Store #{location.SiteId}
                </div>
            )
        });
    }

    render() {
        return (
            <div style={{ display: "flex", flexDirection: "column" }}>
                {this.results}
            </div>
        );
    }
}
