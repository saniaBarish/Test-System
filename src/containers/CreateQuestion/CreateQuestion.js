import React from 'react';
import { connect } from 'react-redux';

import './CreateQuestion.css';

import { questionsSelector } from '../../reducers/testReducer';
import { updateQuestionValue, updateQuestionType } from '../../reducers/questionReducer';

import Input from '../../components/Input';
import ItemList from '../../components/ItemList';

const CreateQuestion = ({ questions, updateQuestionType, updateQuestionValue }) => {
  return (
    <div>
      <ItemList elements={questions} />
      <Input
        label="Question"
        onChange={({ target: { value } }) => updateQuestionValue({ value })}
      />
      <div className="my-radio">
        <span>One correct answer</span>
        <Input
          className="radio-input"
          name="type"
          type="radio"
          value="one"
          checked={true}
          onFocus={({ target: { value } }) => updateQuestionType({ value })}
        />
      </div>
      <div className="my-radio">
        <span>Several correct answers</span>
        <Input
          className="radio-input"
          name="type"
          type="radio"
          value="several"
          onFocus={({ target: { value } }) => updateQuestionType({ value })}
        />
      </div>
    </div>
  );
};

export default connect(
  (state) => ({
    questions: questionsSelector(state),
  }),
  {
    updateQuestionType,
    updateQuestionValue,
  },
)(CreateQuestion);
