import React from 'react';
import PropTypes from 'prop-types';

import './StatusButton.css';

const StatusButton = ({ status, onClick, trueName, falseName, className }) => {
  const color = status ? '-success' : '-danger';
  return (
    <div className="status-button">
      <button
        type="button"
        onClick={onClick}
        className={`${className}${color}`}
      >
        {status ? trueName : falseName}
      </button>
    </div>
  );
};

StatusButton.defaultProps = {
  status: false,
  onClick: () => {},
  trueName: 'right',
  falseName: 'wrong',
  className: 'btn btn-outline',
};

StatusButton.propTypes = {
  status: PropTypes.bool,
  onClick: PropTypes.func,
  trueName: PropTypes.string,
  falseName: PropTypes.string,
  className: PropTypes.string,
};

export default StatusButton;
