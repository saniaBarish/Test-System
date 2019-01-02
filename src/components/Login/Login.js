import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Login.css';

import Input from '../Input';
import Button from '../Button';
import Modal from '../Modal';

const Login = ({ onChangeInput, emailErrorMessage, onBlurInput,
  onFocusInput, passwordErrorMessage, onClickLogin }) => {
  return (
    <div className="login">
      <Modal url="/" />
      <div className="form-signin">
        <h1 className="h3 mb-3 font-weight-normal">Please login</h1>
        <Input
          type="email"
          id="email"
          name="email"
          className="form-control"
          placeholder="Email address"
          onChange={onChangeInput}
          errorMessage={emailErrorMessage}
          onBlur={onBlurInput}
          onFocus={onFocusInput}
        />
        <Input
          type="password"
          id="password"
          name="password"
          className="form-control"
          placeholder="Password"
          onChange={onChangeInput}
          errorMessage={passwordErrorMessage}
          onBlur={onBlurInput}
          onFocus={onFocusInput}
        />
        <Button value="Login" onClick={onClickLogin} />
        <Link to="/registration">
          <Button className="btn btn-danger btn-lg btn-block" value="Registration" />
        </Link>
      </div>
    </div>
  );
};

Login.defaultProps = {
  onChangeInput: () => {},
  onBlurInput: () => {},
  onFocusInput: () => {},
  onClickLogin: () => {},
  emailErrorMessage: '',
  passwordErrorMessage: '',
};

Login.propTypes = {
  onChangeInput: PropTypes.func,
  onBlurInput: PropTypes.func,
  onFocusInput: PropTypes.func,
  onClickLogin: PropTypes.func,
  emailErrorMessage: PropTypes.string,
  passwordErrorMessage: PropTypes.string,
};

export default Login;
