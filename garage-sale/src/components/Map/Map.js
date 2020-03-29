import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Geocode from 'react-geocode';
import Aux from '../../hoc/Auxiliary/Auxiliary';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey('AIzaSyAkmfV-YIauZKkIO_2YGcmGGxVT8dB87IM');
// set response language. Defaults to english.
Geocode.setLanguage('en');
// set response region. Its optional.
// A Geocoding request with region=es (Spain) will return the Spanish city.
Geocode.setRegion('ca');
// Enable or disable logs. Its optional.
Geocode.enableDebug();

class Map extends Component {
  state = {
    address: null,
    coords: [
      {
        lat: 44.652367,
        lng: -63.63455919999999
      },
      {
        lat: 44.65298139999999,
        lng: -63.6364806
      },
      {
        lat: 44.660165,
        lng: -63.638932
      },
      {
        lat: 44.6605807,
        lng: -63.6693357
      }
    ]
  };

  static defaultProps = {
    center: {
      lat: 44.652,
      lng: -63.636
    },
    zoom: 15
  };

  inputChangeHandler = e => {
    this.setState({
      address: e.target.value
    });
  };

  getCoordsFromAddress = event => {
    Geocode.fromAddress(this.state.address).then(
      response => {
        const newCoord = {
          lat: response.results[0].geometry.location.lat,
          lng: response.results[0].geometry.location.lng
        };

        const newState = { ...this.state };
        newState.coords.push(newCoord);

        this.setState({
          newState
        });
        console.log(this.state.coords);
      },
      error => {
        console.error(error);
      }
    );
  };

  render() {
    /*
    if (this.state.coords.lat === null && this.state.coords.lng === null) {
      // Get latidude & longitude from address.
      Geocode.fromAddress('47 Central Avenue, Halifax, NS').then(
        response => {
          this.setState({
            coords: {
              lat: response.results[0].geometry.location.lat,
              lng: response.results[0].geometry.location.lng
            }
          });
        },
        error => {
          console.error(error);
        }
      );
    }
    */

    let markers = this.state.coords.map(coord => {
      return (
        <AnyReactComponent
          // lat={44.653009}
          // lng={-63.636483}
          key={coord.lat + coord.lng}
          lat={coord.lat}
          lng={coord.lng}
          text='My Marker'
        />
      );
    });

    return (
      <Aux>
        {/* Important! Always set the container height explicitly */}
        <div style={{ height: '90vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: 
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            {markers}
          </GoogleMapReact>
          <div>
            <input
              type='text'
              name='address'
              // value={this.state.address}
              onChange={this.inputChangeHandler}
            ></input>
            <button type='button' onClick={this.getCoordsFromAddress}>
              Search
            </button>
          </div>
        </div>
      </Aux>
    );
  }
}

export default Map;
