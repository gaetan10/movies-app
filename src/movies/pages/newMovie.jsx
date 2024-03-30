/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Form from '../../shared/components/Form';

function NewMovie() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: '',
  });

  const history = useHistory();

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        'http://localhost:4000/api/movies/new',
        {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const responseData = await response.json();
      const newMovieId = responseData.newMovie.id;
      history.push(`/movie/${newMovieId}`);
    } catch (err) {
      console.log(err);
    }
  };

  function handleInputChange(event) {
    const { id } = event.target;
    const { value } = event.target;

    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  }

  return (
    <Form
      onChangeInput={handleInputChange}
      onFormSubmit={handleFormSubmit}
      textButton="ADD"
    />
  );
}

export default NewMovie;
