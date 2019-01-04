import React from 'react';
import PropTypes from 'prop-types';

import './QuestionPage.css';

import QuestionList from '../../components/QuestionList';

const QuestionPage = ({ questions }) => {
  return (
    <div className="question-page">
      <QuestionList questions={questions} />
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
