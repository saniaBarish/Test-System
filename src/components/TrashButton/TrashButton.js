import React from 'react';
import PropTypes from 'prop-types';

import './TrashButton.css';

const TrashButton = ({ onClick, className }) => {
  return (
    <div className="TrashButton">
      <button
        type="button"
        className={className}
        onClick={onClick}
      >
        <i className="fa fa-trash-o" />
      </button>
    </div>
  );
};

TrashButton.defaultProps = {
  onClick: () => {},
  className: 'btn btn-outline-danger btn-sm float-right',
};

TrashButton.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default TrashButton;
