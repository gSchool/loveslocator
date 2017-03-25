import React, { Component } from 'react';
//import shouldPureComponentUpdate from 'react-pure-render/function';

export default class Pin extends Component {
    static defaultProps = {};

    //shouldComponentUpdate = shouldPureComponentUpdate;

    get greatPlaceStyle() {
        const K_WIDTH = 16;
        const K_HEIGHT = 16;

        const greatPlaceStyle = {
            // initially any map object has left top corner at lat lng coordinates
            // it's on you to set object origin to 0,0 coordinates
            position: 'absolute',
            width: K_WIDTH,
            height: K_HEIGHT,
            left: -K_WIDTH / 2,
            top: -K_HEIGHT / 2,
        };
        return greatPlaceStyle;
    }

    render() {
        return (
            <img style={this.greatPlaceStyle} src="img/TravelStopPin.png" />
        );
    }
}