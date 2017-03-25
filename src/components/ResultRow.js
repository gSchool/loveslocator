import React, { Component } from 'react';

export default class ResultRow extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="resultBlock">
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <div>
                            <img src="img/logo_icon.png"/>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", flex: "2 0 0", alignItems: "flex-start" }}>
                            <h4>
                                <span>Exit {this.props.ExitNumber}</span>
                                <span>{this.props.City}, {this.props.State}</span>
                                <span>{this.props.Highway}</span>
                            </h4>
                            <h5>
                                <span>{this.props.Address1}, </span>
                                <span>{this.props.City}, </span>
                                <span>{this.props.State}</span>
                                <span>{this.props.Zip}</span>
                            </h5>
                        </div>
                        <div style={{flex: "1 0 0"}}>
                            Store #{this.props.SiteId}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
