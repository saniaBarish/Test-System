import React from 'react';
import PropTypes from 'prop-types';

import './TestItemList.css';

import QuestionListElements from './TestItemListElements';
import Button from '../Button';

const TestItemList = ({ questions, listName }) => {
  return (
    <div className="questions-list">
      <h2>{`${listName} List`}</h2>
      <QuestionListElements elements={questions} listName={listName} />
      <Button className="btn btn-outline-danger" value="Clear List" />
    </div>
  );
};

TestItemList.defaultProps = {
  questions: undefined,
  listName: '',
};

TestItemList.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  listName: PropTypes.string,
};

export default TestItemList;
