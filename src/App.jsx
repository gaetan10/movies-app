/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  BrowserRouter as Router, Route, Redirect, Switch,
} from 'react-router-dom';

import './App.css';
import Movies from './movies/pages/movies';
import NewMovie from './movies/pages/newMovie';
import MovieDetail from './movies/pages/movieDetail';
import UpdateMovie from './movies/pages/updateMovie';
import Header from './shared/components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <main>
          <Route path="/" exact>
            <Movies />
          </Route>
          <Route path="/new" exact>
            <NewMovie />
          </Route>
          <Route path="/movie/:movieId/edit" exact>
            <UpdateMovie />
          </Route>
          <Route path="/movie/:movieId" exact>
            <MovieDetail />
          </Route>
          <Redirect to="/" />
        </main>
      </Switch>
    </Router>

  );
}

export default App;
