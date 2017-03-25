import React, { Component } from 'react';
import ResultRow from './ResultRow'

export default class ResultList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pageNumber: 0,
            pageSize: 5
        };
        this.forward = this.forward.bind(this);
        this.back = this.back.bind(this);
    }

    forward() {
        this.setState(Object.assign({}, this.state, {
            pageNumber: Math.min(this.state.pageNumber + 1, this.pageCount-1)
        }));
    }

    back() {
        this.setState(Object.assign({}, this.state, {
            pageNumber: Math.max(this.state.pageNumber - 1, 0)
        }));
    }

    get pageCount() {
        return Math.ceil(this.props.locations.length / this.state.pageSize);
    }

    get results() {
        if(!this.props.locations) return undefined;
        const start = Math.min(this.state.pageNumber * this.state.pageSize, this.props.locations.length-1);
        const end = Math.min(start + this.state.pageSize, this.props.locations.length-1);
        const ar = this.props.locations.slice(start, end);
        return ar.map((location, i) => {
            return (
                <ResultRow 
                    key={i} 
                    ExitNumber={location.ExitNumber}
                    City={location.City}
                    State={location.State}
                    Highway={location.Highway}
                    Address1={location.Address1}
                    Zip={location.Zip}
                    SiteId={location.SiteId}
                />
            )
        });
    }

    render() {
        return (
            <div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    {this.results}
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignContent: "stretch" }}>
                    <button onClick={this.back}>&lt;&lt;</button>
                    <span>Page {this.state.pageNumber+1} / {this.pageCount} </span>
                    <button onClick={this.forward}>&gt;&gt;</button>
                </div>
            </div>
        );
    }
}
