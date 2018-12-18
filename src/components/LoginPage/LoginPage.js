/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './LoginPage.css';

const LoginPage = ({ onLogin }) => {
  return (
    <div className="login-page">
      <form className="form-signin">
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label htmlFor="inputEmail" className="sr-only">
          Email address
        </label>
        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" />
        <label htmlFor="inputPassword" className="sr-only">
          Password
        </label>
        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" />
        <button className="btn btn-lg btn-primary btn-block" type="button" onClick={onLogin}>Sign in</button>
        <Link to="/registration">
          <button type="button" className="btn btn-danger btn-lg btn-block">Registration</button>
        </Link>
      </form>
    </div>
  );
};

LoginPage.defaultProps = {
  onLogin: () => {},
};

LoginPage.propTypes = {
  onLogin: PropTypes.func,
};

export default LoginPage;
