import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MyGreatPlace from './MyGreatPlace';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class SimpleMap extends Component {
  static defaultProps = {
    center: { lat: 59.95, lng: 30.33 },
    zoom: 11
  };

  constructor(props) {
    super(props);
    this.state = {
      key: undefined,
      locations: undefined
    };
  }

  async componentDidMount() {
    try {
      const key = await (await fetch('/key')).json();
      const locations = await (await fetch('/api/locations')).json();
      this.setState(Object.assign({}, this.state, {
        key: key,
        locations: locations
      }));
    } catch (ex) {
      console.error(ex);
    }
  }

  get locations() {
    return this.state.locations === undefined
      ? null
      : this.state.locations.Points.map((location, i) => {
        return (<MyGreatPlace key={i} lat={location.Latitude} lng={location.Longitude} text={location.Name} />);
      });
  }

  render() {
    return this.state.key === undefined ? null : (
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
        {this.locations}
      </GoogleMapReact>
    );
  }
}