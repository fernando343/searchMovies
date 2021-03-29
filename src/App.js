import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { MoviesList } from './components/MoviesList';
import { Detail } from './pages/Detail';
import { Home } from './pages/Home';

import './App.css';
import 'bulma/css/bulma.css'
import { NotFound } from './pages/NotFound';


class App extends Component {

  state = {
    usedSearch: false,
    results: []
  }

  _handleResults = results => {
    this.setState({ results, usedSearch: true })
  }

  _renderResult() {
    return this.state.results.length === 0
      ? <p>Sorry!😥 Results not found!</p>
      : <MoviesList movies={this.state.results} />

  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/detail/:movieId' component={Detail} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
