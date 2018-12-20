import React from 'react';
import PropTypes from 'prop-types';

import './RegistrationPage.css';

import Button from '../../components/Button';
import Navbar from '../../components/Navbar';
import FormGroupInput from '../../components/FormGroupInput';

const RegistrationPage = ({ onRegistration }) => {
  return (
    <div className="registartion">
      <Navbar />
      <div className="bd-example body">
        <div>
          <h1>Registration Form</h1>
        </div>
        <FormGroupInput type="text" id="firstName" label="First Name" placeholder="First Name" />
        <FormGroupInput type="text" id="lastName" label="Last Name" placeholder="Last Name" />
        <FormGroupInput type="text" id="userName" label="Username" placeholder="Username" />
        <FormGroupInput type="email" id="email" name="email" label="Email" placeholder="Email" />
        <FormGroupInput type="password" id="password" name="password" label="Password" placeholder="Password" />
        <FormGroupInput type="password" id="confirmPassword" name="password" label="Confirm Password" placeholder="Confirm Password" />
        <div>
          <Button
            className="btn btn-primary btn-lg btn-block"
            onClick={onRegistration}
            value="Registration"
          />
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;

RegistrationPage.defaultProps = {
  onRegistration: () => {},
};

RegistrationPage.propTypes = {
  onRegistration: PropTypes.func,
};
