import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './QuestionPage.css';

import {
  questionsSelector,
  answersSelector,
  addAnswer,
  addQuestion,
} from '../../reducers/questionReducer';

import TestItemList from '../../components/TestItemList';
import AddQuestion from '../AddQuestion';

class QuestionPage extends Component {
  static defaultProps = {
    questions: [],
    answers: [],
    addAnswer: () => {},
    addQuestion: () => {},
  }

  static propTypes = {
    questions: PropTypes.arrayOf(PropTypes.object),
    answers: PropTypes.arrayOf(PropTypes.object),
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
      <div className="question-page">
        <TestItemList elements={this.props.questions} listName="Question" type="QuestionList" />
        <AddQuestion
          answers={this.props.answers}
          questionInput={(el) => { this.questionInput = el; }}
          answerInput={(el) => { this.answerInput = el; }}
          checkBox={(el) => { this.checkBox = el; }}
          onClickAddAnswer={this.onClickAddAnswer}
          onClickSaveQuestion={this.onClickSaveQuestion}
        />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    questions: questionsSelector(state),
    answers: answersSelector(state),
  }),
  {
    addQuestion,
    addAnswer,
  },
)(QuestionPage);
