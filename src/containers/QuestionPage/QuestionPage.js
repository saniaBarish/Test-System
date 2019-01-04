import React from 'react';
import PropTypes from 'prop-types';

import './QuestionPage.css';

import ItemList from '../../components/ItemList';
import Button from '../../components/Button';

const QuestionPage = ({ questions }) => {
  return (
    <div className="question-page">
      <div className="questions-list">
        <ItemList
          label="Question List"
          elements={questions}
        />
        <Button value="Clear List" />
      </div>
    </div>
  );
};

QuestionPage.defaultProps = {
  questions: [{ id: '1', value: 'No questions created.' }],
};

QuestionPage.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

export default QuestionPage;
