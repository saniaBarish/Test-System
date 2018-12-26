import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './LoginPage.css';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import {
  emailSelector,
  passwordSelector,
  errSelector,
  onUpdate,
  onLoginError,
} from '../../reducers/loginReducer';
import { email, password } from '../../helppers/constants';
import verifyValidation from '../../helppers/verifyValidation';
import { onLoginAsync } from '../../actions';

class LoginPage extends Component {
  static propTypes = {
    onUpdate: () => {},
    email: () => '',
    password: () => '',
    onLoginAsync: () => {},
    onLoginError: () => {},
  }

  static defaultProps = {
    onUpdate: PropTypes.func,
    email: PropTypes.func,
    password: PropTypes.func,
    onLoginAsync: PropTypes.func,
    onLoginError: PropTypes.func,
  }

  state={
    emailErrorMessage: '',
    passwordErrorMessage: '',
  }

  changeModalVisible = () => this.props.onLoginError({ name: '', value: '' });

  onClickModal = (e) => {
    e.preventDefault();
    this.props.onLoginError({ name: '', value: '' });
  }

  onBlurInput = ({ target: { name, value } }) => this.setState({ [`${name}ErrorMessage`]: verifyValidation(name, value) });

  onFocusInput = ({ target: { name } }) => {
    this.setState({ [`${name}ErrorMessage`]: '' });
    this.changeModalVisible();
  };

  onChangeInput = ({ target: { name, value } }) => this.props.onUpdate({ name, value });

  onSubmit = () => {
    const { emailErrorMessage, passwordErrorMessage } = this.state;
    !emailErrorMessage && !passwordErrorMessage && this.props.onLoginAsync();
  }

  onClickLogin = () => {
    const { email: mail, password: pas } = this.props;
    this.setState({
      emailErrorMessage: verifyValidation(email, mail),
      passwordErrorMessage: verifyValidation(password, pas),
    }, this.onSubmit);
  }

  render() {
    const { emailErrorMessage, passwordErrorMessage } = this.state;
    return (
      <div className="login-page">
        <Modal url="/" />
        <div className="form-signin">
          <h1 className="h3 mb-3 font-weight-normal">Please login</h1>
          <Input
            type="email"
            id="email"
            name="email"
            required={true}
            className="form-control"
            placeholder="Email address"
            onChange={this.onChangeInput}
            errorMessage={emailErrorMessage}
            onBlur={this.onBlurInput}
            onFocus={this.onFocusInput}
          />
          <Input
            type="password"
            id="password"
            name="password"
            className="form-control"
            placeholder="Password"
            onChange={this.onChangeInput}
            errorMessage={passwordErrorMessage}
            onBlur={this.onBlurInput}
            onFocus={this.onFocusInput}
          />
          <Button value="Login" onClick={this.onClickLogin} />
          <Link to="/registration">
            <Button className="btn btn-danger btn-lg btn-block" value="Registration" />
          </Link>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    email: emailSelector(state),
    password: passwordSelector(state),
    err: errSelector(state),
  }),
  {
    onUpdate,
    onLoginAsync,
    onLoginError,
  },
)(LoginPage);
