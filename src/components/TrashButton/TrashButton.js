import React from 'react';
import PropTypes from 'prop-types';

import './TrashButton.css';

const TrashButton = ({ onClick }) => {
  return (
    <button
      type="button"
      className="btn btn-outline-danger btn-sm float-right"
      onClick={onClick}
    >
      <i className="fa fa-trash-o" />
    </button>
  );
};

TrashButton.defaultProps = {
  onClick: () => {},
};

TrashButton.propTypes = {
  onClick: PropTypes.func,
};

export default TrashButton;
