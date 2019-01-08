import React from 'react';
import PropTypes from 'prop-types';

import './QuestionPage.css';

import TestItemList from '../../components/TestItemList';
import AddQuestion from '../AddQuestion';

const QuestionPage = ({ questions }) => {
  return (
    <div className="question-page">
      <TestItemList questions={questions} listName="Question" />
      <AddQuestion />
    </div>
  );
};

QuestionPage.defaultProps = {
  questions: undefined,
};

QuestionPage.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

export default QuestionPage;
