/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Form from '../../shared/components/Form';

function UpdateMovie() {
  const { movieId } = useParams('movieId');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: '',
  });

  const history = useHistory();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await fetch(
        `http://localhost:4000/api/movies/${movieId}`,
        {
          method: 'PUT',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      history.push(`/movie/${movieId}`);
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
      textButton="EDIT"
    />
  );
}

export default UpdateMovie;
