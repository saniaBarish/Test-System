import React from 'react';
import PropTypes from 'prop-types';

import './TestInfo.css';

import ItemList from '../../components/ItemList';
import Button from '../../components/Button';

const TestInfo = ({ questions, testName }) => {
  return (
    <div className="test-info">
      <ItemList
        label={`${testName} Question List`}
        message="There is no question in the test."
        elements={questions}
      />
      <div className="btn-group">
        <Button value="Save Test" />
        <Button
          className="btn btn-lg btn-danger btn-block"
          value="Delete Test"
        />
      </div>
    </div>
  );
};

TestInfo.defaultProps = {
  questions: [],
  testName: 'new Test',
};

TestInfo.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object),
  testName: PropTypes.string,
};

export default TestInfo;
