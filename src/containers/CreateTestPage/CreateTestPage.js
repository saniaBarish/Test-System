import React, { Component } from 'react';
import { connect } from 'react-redux';

import './CreateTestPage.css';

import { testValueSelector, addQuestion } from '../../reducers/testReducer';

import CreateQuestion from '../CreateQuestion';
import CreateAnswer from '../CreateAnswer';
import Button from '../../components/Button';

class CreateTestPage extends Component {
  render() {
    return (
      <div className="create-test-page">
        <h2>{this.props.testName}</h2>
        <CreateQuestion />
        <CreateAnswer />
        <Button value="Add this question" />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    testName: testValueSelector(state),
  }),
  {
    addQuestion,
  },
)(CreateTestPage);
