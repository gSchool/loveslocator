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
                <div key={i} className="resultBlock">
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <div>
                                <img src="img/logo_icon.png"/>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", flex: "2 0 0", alignItems: "flex-start" }}>
                                <h4>
                                    <span>Exit {location.ExitNumber}</span>
                                    <span>{location.City}, {location.State}</span>
                                    <span>{location.Highway}</span>
                                </h4>
                                <h5>
                                    <span>{location.Address1}, </span>
                                    <span>{location.City}, </span>
                                    <span>{location.State}</span>
                                    <span>{location.Zip}</span>
                                </h5>
                            </div>
                            <div style={{flex: "1 0 0"}}>
                                Store #{location.SiteId}
                            </div>
                        </div>
                    </div>
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
