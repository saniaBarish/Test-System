import React from 'react';

import './RegistrationPage.css';

import Navbar from '../../components/Navbar';
import RegistrationForm from '../RegistrationForm';

const RegistrationPage = () => {
  return (
    <div className="registartion">
      <Navbar />
      <div className="bd-example body">
        <div>
          <h1>Registration Form</h1>
        </div>
        <RegistrationForm />
      </div>
    </div>
  );
};

export default RegistrationPage;
