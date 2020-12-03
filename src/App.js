import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, Pokemon } from './paths';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={ Home } />
        <Route exact path="/pokemon/:id" render={(props) => <Pokemon {...props} />} />
      </Router>
    );
  }
}

export default App;