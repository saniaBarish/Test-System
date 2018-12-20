import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = ({ className, onClick, value }) => {
  return (
    <div className="col-6 button">
      <button
        type="button"
        className={className}
        onClick={onClick}
      >
        {value}
      </button>
    </div>
  );
};

Button.defaultProps = {
  className: 'btn btn-lg btn-primary btn-block',
  onClick: () => {},
  value: 'Button',
};

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  value: PropTypes.string,
};

export default Button;
