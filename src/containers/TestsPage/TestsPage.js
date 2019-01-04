import React from 'react';
import { Link } from 'react-router-dom';

import './TestsPage.css';
import { CREATE_TEST } from '../../helppers/constants';

const TestsPage = () => {
  return (
    <div className="tests-page">
      <Link to={`/${CREATE_TEST}`}>
        <div className="btn btn-primary my-2">CREATE_TEST</div>
      </Link>
    </div>
  );
};

export default TestsPage;
