import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './AddQuestion.css';

import Input from '../../components/Input';
import Button from '../../components/Button';
import CheckBox from '../../components/CheckBox';
import TestItemList from '../../components/TestItemList';

class AddQuestion extends Component {
  static defaultProps = {
    addAnswer: () => {},
    addQuestion: () => {},
  }

  static propTypes = {
    addAnswer: PropTypes.func,
    addQuestion: PropTypes.func,
  }

  onClickAddAnswer = () => {
    this.props.addAnswer({
      name: this.answerInput.value,
      status: this.checkBox.checked,
    });
    this.answerInput.value = '';
    this.checkBox.checked = false;
  }

  onClickSaveQuestion = () => {
    this.props.addQuestion({ name: this.questionInput.value });
    this.questionInput.value = '';
  }

  render() {
    return (
      <div className="add-question">
        <h2>Create Question</h2>
        <Input placeholder="Enter question" refInput={(node) => { this.questionInput = node; }} />
        <TestItemList type="answers" />
        <Input placeholder="Enter answer" refInput={(node) => { this.answerInput = node; }} />
        <CheckBox label="current answer" refCheckBox={(node) => { this.checkBox = node; }} />
        <div className="btn-group">
          <Button value="Add answer" className="btn btn-outline-primary" onClick={this.onClickAddAnswer} />
          <Button value="Save question" className="btn btn-outline-success" onClick={this.onClickSaveQuestion} />
        </div>
      </div>
    );
  }
}

export default AddQuestion;
