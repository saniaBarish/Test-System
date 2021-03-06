import React from 'react';
import PropTypes from 'prop-types';

import './QuestionSelect.css';

import Button from '../Button';
import ItemList from '../ItemList';

const QuestionSelect = ({ questions, testName }) => {
  return (
    <div className="questions-select">
      <div className="questions">
        <ItemList
          label={`Slect the questions that fall into the test "${testName}"`}
          elements={questions}
          message="No questions created."
        />
        <div className="btn-add-question">
          <Button value={`Add Question in test "${testName}"`} />
        </div>
      </div>
      <div className="btn-create-question">
        <Button value="Create Question" />
      </div>
    </div>
  );
};

QuestionSelect.defaultProps = {
  questions: [],
  testName: '',
};

QuestionSelect.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object])),
  testName: PropTypes.string,
};

export default QuestionSelect;
