import React from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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

const TestsPage = ({ createTest: onCreateTest, updateTestValue: onUpdateTestValue, dispatch }) => {
  const onClickCreateTest = () => {
    onCreateTest();
    dispatch(push(`/${CREATE_TEST}`));
  };

  const onChangeTestNameInput = ({ target: { value } }) => {
    onUpdateTestValue({ value });
  };

  //ssdad;

  return (
    <div className="test-page">
      <div className="test-page-tests">
        <ItemList />
      </div>
      <Input label="Test Name" onChange={onChangeTestNameInput} />
      <Button value="Create Test" onClick={onClickCreateTest} />
    </div>
  );
};

TestsPage.defaultProps = {
  createTest: () => {},
  updateTestValue: () => {},
  dispatch: () => {},
};

TestsPage.propTypes = {
  createTest: PropTypes.func,
  updateTestValue: PropTypes.func,
  dispatch: PropTypes.func,
};

export default connect(
  (state) => ({
    testValue: testValueSelector(state),
  }),
  {
    createTest,
    updateTestValue,
    dispatch: (dispatch) => dispatch,
  },
)(TestsPage);
