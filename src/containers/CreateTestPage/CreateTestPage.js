import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './CreateTestPage.css';

import { testValueSelector, addQuestion, questionsSelector } from '../../reducers/testReducer';

import QuestionSelect from '../QuestionSelect';
import TestInfo from '../TetsInfo';

class CreateTestPage extends Component {
  static defaultProps = {
    testName: 'new Test',
    questions: [],
  };

  static propTypes = {
    testName: PropTypes.string,
    questions: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.string])),
  };

  render() {
    const { testName, questions } = this.props;
    return (
      <div className="create-test-page">
        <QuestionSelect testName={testName} questions={questions} />
        <TestInfo testName={testName} />
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
