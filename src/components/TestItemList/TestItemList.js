import React from 'react';
import PropTypes from 'prop-types';

import './TestItemList.css';

import QuestionListElements from './QuestionListElements';
import AnswerListElements from './AnswerListElements';
import Button from '../Button';

const list = (type) => {
  if (type === 'answers') {
    return <AnswerListElements />;
  }

  if (type === 'questions') {
    return <QuestionListElements />;
  }

  return null;
};

const QuestionList = ({ listName, type }) => {
  return (
    <div className="test-item-list">
      <h2>{listName}</h2>
      {list(type)}
      <Button className="btn btn-outline-danger" value="Clear List" />
    </div>
  );
};

QuestionList.defaultProps = {
  listName: 'Question List',
  type: 'questions',
};

QuestionList.propTypes = {
  listName: PropTypes.string,
  type: PropTypes.string,
};

export default QuestionList;
