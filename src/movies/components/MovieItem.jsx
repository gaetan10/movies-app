/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { Link } from 'react-router-dom';

import './MovieItem.css';
import Card from '../../shared/components/Card';

function MovieItem({ movie }) {
  console.log('movie', movie);
  return (
    <Link to={`/movie/${movie.id}`} className="movie-link">
      <Card className="movie-item__content">
        <div className="movie-item__image">
          <img src={movie.imageUrl} alt={movie.title} />
        </div>
      </Card>
    </Link>
  );
}

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieItem;
