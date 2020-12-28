import React, { Component } from 'react';
import pikachu from './disappointed-pikachu.gif';
import './pokedetails.css';

class NotFound extends Component {
  render() {
    return (
      <div className="title">
        <h2> Page request not found </h2>
        <div className="pokedex">
            <img className="pokedex-img" src={ pikachu } alt="pikachu crying"/>
        </div>
      </div>
    );
  }
}

export default NotFound;