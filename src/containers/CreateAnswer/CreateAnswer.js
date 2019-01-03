import React from 'react';
import { connect } from 'react-redux';

import './CreateAnswer.css';

import {
  addAnswerSelector,
  answerValueSelector,
  // createAnswer,
  updateAnswerStatus,
  updateAnswerValue,
  clearAnswerInputs,
} from '../../reducers/answerReducer';
import { addAnswer } from '../../reducers/questionReducer';

import Input from '../../components/Input';
import Button from '../../components/Button';

const CreateAnswer = ({
  updateAnswerStatus, updateAnswerValue, answerValue,
  clearAnswerInputs, addAnswer, answer }) => {
  return (
    <div className="create-answer">
      <Input
        label="Answer"
        placeholder="Enter answer"
        value={answerValue}
        onChange={({ target: { value } }) => updateAnswerValue({ value })}
      />
      <Input
        label="correct answer"
        name="status"
        type="radio"
        onFocus={() => updateAnswerStatus(true)}
      />
      <Input
        label="wrong answer"
        name="status"
        type="radio"
        checked={true}
        onFocus={() => updateAnswerStatus(false)}
      />
      <Button
        value="Add answer in this question"
        onClick={() => {
          addAnswer(answer);
          clearAnswerInputs();
        }}
      />
    </div>
  );
};

export default connect(
  (state) => ({
    answer: addAnswerSelector(state),
    answerValue: answerValueSelector(state),
  }),
  {
    updateAnswerStatus,
    updateAnswerValue,
    clearAnswerInputs,
    addAnswer,
  },
)(CreateAnswer);
