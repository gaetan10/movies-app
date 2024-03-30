/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';

import MovieList from '../components/MovieList';

function Movies() {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/movies');
        if (!response.ok) {
          throw new Error('Could not load movies.Please try again later');
        }
        const responseData = await response.json();
        setMoviesList(responseData.movies);
      } catch (err) {
        console.log('Error fetching movies:', err.message);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <MovieList
        items={moviesList}
      />
    </div>
  );
}

export default Movies;
