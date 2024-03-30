/* eslint-disable react/jsx-no-bind */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import MovieItem from './MovieItem';
import './MovieList.css';
import Button from '../../shared/components/Button';

function MovieList({ items }) {
  const history = useHistory();

  function handleClick() {
    history.push('/new');
  }

  if (items.length === 0) {
    return (

      <div className="movie-list-empty center">
        <h2>No movies available.</h2>
        <div className="button-container">
          <Button onClick={handleClick}>
            Add a movie
          </Button>
        </div>
      </div>

    );
  }
  return (
    <div>
      <ul className="movie-list">
        {items.map((movie) => (
          <li key={movie.id}>
            <MovieItem movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
}

MovieList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default MovieList;
