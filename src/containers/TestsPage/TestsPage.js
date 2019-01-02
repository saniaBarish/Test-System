import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import './TestsPage.css';

import { CREATE_TEST } from '../../helppers/constants';
import {
  testValueSelector,
  createTest,
  updateTestValue,
} from '../../reducers/testReducer';

import Button from '../../components/Button';
import Input from '../../components/Input';
import ItemList from '../../components/ItemList';

class TestsPage extends Component {
  onClickCreateTest = () => {
    this.props.createTest();
    this.props.dispatch(push(`/${CREATE_TEST}`));
  }

  onChangeTestNameInput = ({ target: { value } }) => {
    this.props.updateTestValue({ value });
  }

  render() {
    return (
      <div className="test-page">
        <div className="test-page-tests">
          <ItemList />
        </div>
        <Input label="Test Name" onChange={this.onChangeTestNameInput} />
        <Button value="Create Test" onClick={this.onClickCreateTest} />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    testValue: testValueSelector(state),
  }),
  {
    createTest,
    updateTestValue,
  },
)(TestsPage);
