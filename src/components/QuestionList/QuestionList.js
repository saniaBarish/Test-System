import React from 'react';
import PropTypes from 'prop-types';

import './QuestionList.css';

import QuestionListElements from '../QuestionListElements';
import Button from '../Button';

const QuestionList = ({ questions }) => {
  return (
    <div className="questions-list">
      <h2>Question List</h2>
      <QuestionListElements elements={questions} />
      <Button className="btn btn-outline-danger" value="Clear List" />
    </div>
  );
};

QuestionList.defaultProps = {
  questions: undefined,
};

QuestionList.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

export default QuestionList;
