/* eslint-disable react/prop-types */
import React from 'react';

import './Button.css';

function Button({ children, onClick }) {
  return (
    <button type="submit" className="airbnb-button" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
