import React from 'react';
import PropTypes from 'prop-types';

import './TestItemList.css';

import TestItemListElements from './TestItemListElements';
import Button from '../Button';

const TestItemList = ({ elements, listName, message, type, onDelete }) => {
  return (
    <div className="questions-list">
      <h2>{`${listName} List`}</h2>
      <TestItemListElements
        elements={elements}
        listName={listName}
        message={message}
        type={type}
        onDelete={onDelete}
      />
      <Button className="btn btn-outline-danger" value="Clear List" />
    </div>
  );
};

TestItemList.defaultProps = {
  elements: [],
  message: 'List is empty.',
  listName: '',
  type: '',
  onDelete: () => {},
};

TestItemList.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.object),
  message: PropTypes.string,
  listName: PropTypes.string,
  type: PropTypes.string,
  onDelete: PropTypes.func,
};

export default TestItemList;
