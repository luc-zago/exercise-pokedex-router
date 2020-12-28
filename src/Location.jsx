import React, { Component } from 'react';
import './pokedetails.css'

class Location extends Component {
  render() {
    const { map, location } = this.props.location;

    return (
      <div className="map">
        <img src={ map } alt={ location } />
        <p><em> { location} </em></p>
      </div>
    );
  }
}

export default Location;
