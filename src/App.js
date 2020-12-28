import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, PokemonDetails, About, NotFound } from './paths';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={ Home } />
        <Route exact path="/pokemon/:id" render={(props) => <PokemonDetails {...props} />} />
        <Route exact path="/about" component={ About } />
        <Route path="/:any" component={ NotFound } />
      </Router>
    );
  }
}

export default App;