import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class SimpleMap extends Component {
  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 11
  };

  constructor(props) {
      super(props);
      this.state = {
          key: undefined
      };
  }

  async componentDidMount() {
      const stream = await fetch('/key');
      const key = await stream.json();
      this.setState(Object.assign({}, this.state, {
          key: key
      }));
  }

  render() {
    return this.state.key === undefined ? <div/> : (
      <GoogleMapReact
        apiKey={this.state.key}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text={'Kreyser Avrora'}
        />
      </GoogleMapReact>
    );
  }
}