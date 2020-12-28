import React, { Component } from 'react';
import './pokedetails.css';
import pokemons from './data';
import Location from './Location';

class PokemonDetails extends Component {
  constructor(props) {
    super(props);
    this.findPokemon = this.findPokemon.bind(this);
  }

  findPokemon() {
    const { id } = this.props.match.params;
    const pokemon = pokemons.find(pokemon => pokemon.id === parseInt(id));
    return pokemon;
  }

  render() {
    const pokemon = this.findPokemon();
    const { name, type, averageWeight, image, summary, foundAt } = pokemon;

    return (
      <div className="title">
        <h2> { name } details </h2>
        <div className="pokemon-container">
          <div className="pokemon">
            <div>
              <p>{name}</p>
              <p>{type}</p>
              <p>
                Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
              </p>
            </div>
            <img src={image} alt={`${name} sprite`} />
          </div>
        </div>
        <h2> Summary </h2>
        <p> { summary } </p>
        <h2> Game locations of { name } </h2>
        <div className="location">
          { foundAt.map((location) => <Location key={ location.location } location={ location } />) }
        </div>
      </div>
    );
  }
}

export default PokemonDetails;