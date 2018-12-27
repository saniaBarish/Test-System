import React from 'react';

import './TestsPage.css';

import Button from '../../components/Button';
import ItemList from '../../components/ItemList';

const TestsPage = () => {
  return (
    <div className="test-page">
      <div className="test-page-tests">
        <ItemList />
      </div>
      <Button value="Create Test" />
    </div>
  );
};

export default TestsPage;
