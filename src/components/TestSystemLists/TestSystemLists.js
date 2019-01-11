import React from 'react';
import PropTypes from 'prop-types';

import './TestSystemLists.css';

import Button from '../Button';

const TestSystemLists = ({ listName, children }) => {
  return (
    <div className="test-system-lists">
      <h2>{listName}</h2>
      {children}
      <div className="test-system-lists-btn">
        <Button className="btn btn-outline-danger" value="Clear List" />
      </div>
    </div>
  );
};

TestSystemLists.defaultProps = {
  listName: 'Question List',
  children: null,
};

TestSystemLists.propTypes = {
  listName: PropTypes.string,
  children: PropTypes.element,
};

export default TestSystemLists;
