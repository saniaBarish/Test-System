import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './AddQuestion.css';

import verifyValidation from '../../helppers/verifyValidation';
import { ANSWER, QUESTION } from '../../helppers/constants';

import Input from '../../components/Input';
import Button from '../../components/Button';
import CheckBox from '../../components/CheckBox';
import TestSystemLists from '../../components/TestSystemLists';
import ListElements from '../../components/ListElements';
import Answer from '../../components/Answer';

class AddQuestion extends Component {
  static defaultProps = {
    answers: [{
      id: 'answer_',
      name: 'No answers added...',
      status: false,
      checked: false,
    }],
  }

  static propTypes = {
    addAnswer: PropTypes.func.isRequired,
    addQuestion: PropTypes.func.isRequired,
    deleteAllAnswer: PropTypes.func.isRequired,
    answers: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      status: PropTypes.bool,
      checked: PropTypes.bool,
    })),
  }

  state = {
    questionErrorMessage: '',
    answerErrorMessage: '',
  }

  onClickAddAnswer = () => {
    this.props.addAnswer({
      name: this.answerInput.value,
      status: this.checkBox.checked,
    });
    this.answerInput.value = '';
    this.checkBox.checked = false;
  }

  onPressEnter = (func) => ({ keyCode }) => {
    if (keyCode === 13) {
      func();
    }
  }

  onSubmit = () => {
    const { questionErrorMessage, answerErrorMessage } = this.state;
    if (!questionErrorMessage && !answerErrorMessage) {
      this.props.addQuestion({ name: this.questionInput.value });
      this.questionInput.value = '';
    }
  }

  onClickSaveQuestion = () => {
    this.setState({
      questionErrorMessage: verifyValidation(QUESTION, this.questionInput.value),
      answerErrorMessage: verifyValidation(ANSWER, this.props.answers),
    }, this.onSubmit);
  }

  render() {
    return (
      <div className="add-question">
        <h2>Create Question</h2>
        <Input
          placeholder="Enter question"
          refInput={(node) => { this.questionInput = node; }}
          errorMessage={this.state.questionErrorMessage}
          onFocus={() => this.setState({ questionErrorMessage: '' })}
          onBlur={() => this.setState({ questionErrorMessage: '' })}
          onKeyDown={this.onPressEnter(this.onClickSaveQuestion)}
        />
        <TestSystemLists type="answers" listName="Answer List">
          <ListElements
            elements={this.props.answers}
            deleteAllElements={this.props.deleteAllAnswer}
            View={Answer}
          />
        </TestSystemLists>
        <Input
          placeholder="Enter answer"
          refInput={(node) => { this.answerInput = node; }}
          errorMessage={this.state.answerErrorMessage}
          onFocus={() => this.setState({ answerErrorMessage: '' })}
          onBlur={() => this.setState({ answerErrorMessage: '' })}
          onKeyDown={this.onPressEnter(this.onClickAddAnswer)}
        />
        <div className="create-question-checkbox">
          <CheckBox label="Right answer" refCheckBox={(node) => { this.checkBox = node; }} />
        </div>
        <div className="btn-group">
          <Button value="Add answer" className="btn btn-primary" onClick={this.onClickAddAnswer} />
          <Button value="Add question" className="btn btn-success" onClick={this.onClickSaveQuestion} />
        </div>
      </div>
    );
  }
}

export default AddQuestion;
