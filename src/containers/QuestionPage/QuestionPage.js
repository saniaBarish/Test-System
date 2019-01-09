import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './QuestionPage.css';

import {
  questionsSelector,
  addAnswer,
  addQuestion,
  deleteQuestion,
} from '../../reducers/questionReducer';

import TestItemList from '../../components/TestItemList';
import AddQuestion from '../AddQuestion';

class QuestionPage extends Component {
  static defaultProps = {
    questions: [],
  }

  static propTypes = {
    questions: PropTypes.arrayOf(PropTypes.object),
    deleteQuestion: PropTypes.func.isRequired,
    addAnswer: PropTypes.func.isRequired,
    addQuestion: PropTypes.func.isRequired,
  }

  render() {
    return (
      <div className="question-page">
        <TestItemList
          elements={this.props.questions}
          onDelete={this.props.deleteQuestion}
          message="No questions added..."
        />
        <AddQuestion addAnswer={this.props.addAnswer} addQuestion={this.props.addQuestion} />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    questions: questionsSelector(state),
  }),
  {
    deleteQuestion,
    addAnswer,
    addQuestion,
  },
)(QuestionPage);
