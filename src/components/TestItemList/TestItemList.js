import React from 'react';
import PropTypes from 'prop-types';

import './TestItemList.css';

import TestItemListElements from './TestItemListElements';
import Button from '../Button';

const TestItemList = ({ elements, listName, message, type }) => {
  return (
    <div className="questions-list">
      <h2>{`${listName} List`}</h2>
      <TestItemListElements elements={elements} listName={listName} message={message} type={type} />
      <Button className="btn btn-outline-danger" value="Clear List" />
    </div>
  );
};

TestItemList.defaultProps = {
  elements: [],
  message: 'List is empty.',
  listName: '',
};

TestItemList.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.object),
  message: PropTypes.string,
  listName: PropTypes.string,
};

export default TestItemList;
