import React from 'react';
import PropTypes from 'prop-types';

import './Input.css';

const Input = ({ type, id, className, placeholder,
  onChange, onBlur, errorMessage, onFocus, label, name,
  checked, value,
}) => {
  const alert = errorMessage ? <span>{errorMessage}</span> : null;
  const redBorder = errorMessage ? 'invalid' : '';
  return (
    <div>
      <label htmlFor={id}>
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
          defaultChecked={checked}
          value={value}
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
  label: '',
  name: '',
  value: undefined,
  checked: false,
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
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  checked: PropTypes.bool,
};

export default Input;
