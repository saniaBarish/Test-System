import React from 'react';
import PropTypes from 'prop-types';

import './TextArea.css';

const TextArea = ({ rows, defaultValue, textAreaRef }) => {
  return (
    <div className="TextArea">
      <textarea
        rows={rows}
        defaultValue={defaultValue}
        ref={textAreaRef}
      />
    </div>
  );
};

TextArea.defaultProps = {
  rows: '3',
  defaultValue: '',
  textAreaRef: () => {},
};

TextArea.propTypes = {
  rows: PropTypes.string,
  defaultValue: PropTypes.string,
  textAreaRef: PropTypes.func,
};

export default TextArea;
