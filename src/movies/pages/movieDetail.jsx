/* eslint-disable max-len */
/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Button from '../../shared/components/Button';

import './movieDetail.css';

function MovieDetail() {
  const { movieId } = useParams('movieId');
  const [selectedMovie, setSelectedMovie] = useState({});

  const history = useHistory();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/movies/${movieId}`);
        if (!response.ok) {
          throw new Error('Could not fetch data');
        }
        const responseData = await response.json();
        setSelectedMovie(responseData.movie);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMovie();
  }, [movieId]);

  const handleDeleteButton = async () => {
    console.log('delete');
    try {
      await fetch(`http://localhost:4000/api/movies/${movieId}`, { method: 'DELETE' });
      history.push('/');
    } catch (err) {
      console.log(err);
    }
  };

  function handleEditButton() {
    console.log('edit');
    history.push(`/movie/${movieId}/edit`);
  }

  return (
    <div className="movie-detail-container">
      <div className="movie-detail-image">
        <img src={selectedMovie.imageUrl} alt={selectedMovie.title} />
      </div>
      <div className="movie-detail-content">
        <h1 className="movie-detail-title">{selectedMovie.title}</h1>
        <div className="movie-detail-description">
          <p>{selectedMovie.description}</p>
        </div>
        <div className="movie-detail-buttons">
          <Button onClick={handleEditButton} className="edit-button">EDIT</Button>
          <Button onClick={handleDeleteButton} className="delete-button">DELETE</Button>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
