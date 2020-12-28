import React, { Component } from 'react';
import pokedex from './gen-1-pokedex.png';
import './pokedetails.css';

class About extends Component {
  render() {
    return (
      <div className="title">
        <h2> About Pokedéx </h2>
        <p> This application simulates a Pokedéx, a digital enciclopedia containing all Pokémons </p>
        <p> One can filter Pokémons by type, and see more details for each one of them </p>
        <div className="pokedex">
            <img className="pokedex-img" src={ pokedex } alt="Generation I Pokédex" />
        </div>
      </div>
    );
  }
}

export default About;