import React from 'react';
import PropTypes from 'prop-types';

import './Input.css';

const Input = ({ type, id, className, placeholder, required,
  onChange, onBlur, errorMessage, onFocus,
}) => {
  const alert = errorMessage ? <span>{errorMessage}</span> : null;
  const redBorder = errorMessage ? 'invalid' : '';
  return (
    <div className=" col-6">
      <label htmlFor={id}>
        <input
          type={type}
          id={id}
          name={id}
          className={`${className} ${redBorder}`}
          placeholder={placeholder}
          required={required}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
        />
        {alert}
      </label>
    </div>
  );
};

Input.defaultProps = {
  type: 'text',
  id: '',
  className: 'form-control',
  placeholder: '',
  required: false,
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
  errorMessage: '',
};

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  errorMessage: PropTypes.string,
};

export default Input;
