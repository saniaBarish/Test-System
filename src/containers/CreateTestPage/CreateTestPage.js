import React, { Component } from 'react';
import { connect } from 'react-redux';

import './CreateTestPage.css';

import { testValueSelector, addQuestion, questionsSelector } from '../../reducers/testReducer';

import QuestionSelect from '../QuestionSelect';

class CreateTestPage extends Component {
  render() {
    const { testName, questions } = this.props;
    return (
      <div className="create-test-page">
        <div className="create-test-page-header">
          <h2>{testName}</h2>
        </div>
        <QuestionSelect testName={testName} questions={questions} />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    testName: testValueSelector(state),
    questions: questionsSelector(state),
  }),
  {
    addQuestion,
  },
)(CreateTestPage);
