import React from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';

import './CheckBox.css';

const CheckBox = ({ id, label, refCheckBox, onClick }) => {
  return (
    <div className="checkbox-input">
      <label htmlFor={id} className="checkbox-label">
        {label}
        <input id={id} type="checkbox" ref={refCheckBox} onClick={onClick} />
      </label>
    </div>
  );
};

CheckBox.defaultProps = {
  id: uniqueId('checkbox_'),
  label: '',
  refCheckBox: () => {},
  onClick: () => {},
};

CheckBox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  refCheckBox: PropTypes.func,
  onClick: PropTypes.func,
};

export default CheckBox;
