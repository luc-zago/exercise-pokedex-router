import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

class Home extends Component {
  constructor(props) {
    super(props);
    this.renderPokedex = this.renderPokedex.bind(this);
  }

  renderPokedex() {
    const { pathname } = this.props.location;
    if (pathname === '/') return (<Pokedex pokemons={ pokemons } />);
  }
  render() {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <div className="links">
          <Link to="/"><p className="link">Home</p></Link>
          <Link to="/About"><p className="link">About</p></Link>
        </div>
        { this.renderPokedex() }
      </div>
    )
  }
}

export default Home;