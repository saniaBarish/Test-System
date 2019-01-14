import React from 'react';
import PropTypes from 'prop-types';

import './Input.css';

const Input = ({ type, id, className, placeholder,
  onChange, onBlur, errorMessage, onFocus, onKeyDown,
  label, name, refInput,
}) => {
  const alert = errorMessage ? <span>{errorMessage}</span> : null;
  const redBorder = errorMessage ? 'invalid' : '';
  return (
    <label htmlFor={id} className="custom-input">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        className={`${className} ${redBorder}`}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        ref={refInput}
        onKeyDown={onKeyDown}
      />
      {alert}
    </label>
  );
};

Input.defaultProps = {
  type: 'text',
  id: '',
  className: 'form-control',
  placeholder: '',
  label: '',
  name: '',
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
  refInput: () => {},
  onKeyDown: () => {},
  errorMessage: '',
};

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  refInput: PropTypes.func,
  onKeyDown: PropTypes.func,
};

export default Input;
