import React from 'react';
import PropTypes from 'prop-types';

import './TextArea.css';

const TextArea = ({ rows, defaultValue, onKeyDownEnterShift }) => {
  return (
    <div className="TextArea">
      <textarea
        rows={rows}
        defaultValue={defaultValue}
        onKeyDown={onKeyDownEnterShift}
      />
    </div>
  );
};

TextArea.defaultProps = {
  rows: '3',
  defaultValue: '',
  onKeyDownEnterShift: () => {},
};

TextArea.propTypes = {
  rows: PropTypes.string,
  defaultValue: PropTypes.string,
  onKeyDownEnterShift: PropTypes.func,
};

export default TextArea;
