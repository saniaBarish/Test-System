import React from 'react';
import PropTypes from 'prop-types';

import './AddQuestion.css';

import Input from '../../components/Input';
import Button from '../../components/Button';
import TestItemList from '../../components/TestItemList';
import CheckBox from '../../components/CheckBox';

const AddQuestion = ({ answers, questionInput, answerInput, checkBox,
  onClickAddAnswer, onClickSaveQuestion,
}) => {
  return (
    <div className="add-question">
      <h2>Create Question</h2>
      <Input placeholder="Enter question" refInput={questionInput} />
      <TestItemList
        listName="Answer"
        elements={answers}
        message="No answers added..."
      />
      <Input placeholder="Enter answer" refInput={answerInput} />
      <CheckBox label="current answer" refCheckBox={checkBox} />
      <div className="btn-group">
        <Button value="Add answer" className="btn btn-outline-primary" onClick={onClickAddAnswer} />
        <Button value="Save question" className="btn btn-outline-success" onClick={onClickSaveQuestion} />
      </div>
    </div>
  );
};

AddQuestion.defaultProps = {
  answers: [],
  questionInput: () => {},
  answerInput: () => {},
  checkBox: () => {},
  onClickAddAnswer: () => {},
  onClickSaveQuestion: () => {},
};

AddQuestion.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.object),
  questionInput: PropTypes.func,
  answerInput: PropTypes.func,
  checkBox: PropTypes.func,
  onClickAddAnswer: PropTypes.func,
  onClickSaveQuestion: PropTypes.func,
};

export default AddQuestion;
