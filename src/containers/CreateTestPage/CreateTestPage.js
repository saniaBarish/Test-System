import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
/// test pull request

CreateTestPage.defaultProps = {
  testName: '',
  questions: [],
};

CreateTestPage.propTypes = {
  testName: PropTypes.string,
  questions: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.string])),
};

export default connect(
  (state) => ({
    testName: testValueSelector(state),
    questions: questionsSelector(state),
  }),
  {
    addQuestion,
  },
)(CreateTestPage);
