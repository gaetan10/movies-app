/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import './Form.css';
import Button from './Button';

function Form({ onChangeInput, onFormSubmit, textButton }) {
  // const [formData, setFormData] = useState({
  //   title: '',
  //   description: '',
  //   imageUrl: '',
  // });

  // function handleFormSubmit(event) {
  //   event.preventDefault();
  //   console.log(formData);
  //   console.log('biiitch');
  // }

  // function handleInputChange(event) {
  //   const { id } = event.target;
  //   const { value } = event.target;

  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [id]: value,
  //   }));
  // }
  // console.log('formData', formData);
  return (
    <form className="movie-form" onSubmit={onFormSubmit}>
      <div className="form-control">
        <label htmlFor="Title">Title</label>
        <input
          id="title"
          type="text"
          placeholder="Ex: Lord of the ring"
          onChange={onChangeInput}
          // value={props.value}
        />
      </div>
      <div className="form-control">
        <label htmlFor="Description">Description</label>
        <input
          id="description"
          type="text"
          placeholder="Ex: The story of Middle Earth."
          onChange={onChangeInput}
          // value={props.value}
        />
      </div>
      <div className="form-control">
        <label htmlFor="Image">Image Url</label>
        <input
          id="imageUrl"
          type="text"
          placeholder="Enter the url of the movie board."
          onChange={onChangeInput}
          // value={props.value}
        />
      </div>
      <Button type="submit">{textButton}</Button>
    </form>
  );
}

export default Form;
