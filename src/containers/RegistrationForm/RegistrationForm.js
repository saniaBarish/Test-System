import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import verifyValidation from '../../helppers/verifyValidation';

import {
  firstName,
  lastName,
  userName,
  email,
  password,
  confirmPassword,
  err,
} from '../../helppers/constants';

import { onLoading } from '../../reducers/loadingReducer';

import {
  onUpdate,
  onRegistrationError,
  firstNameSelector,
  lastNameSelector,
  userNameSelector,
  emailSelector,
  passwordSelector,
  confirmPasswordSelector,
  errSelector,
} from '../../reducers/registrationReducer';

import { onRegistrationAsync } from '../../actions';

import './RegistrationForm.css';

class FormGroupInput extends Component {
  static defaultProps = {
    onUpdate: () => {},
    onRegistrationAsync: () => {},
    onRegistrationError: () => {},
    onLoading: () => {},
    password: '',
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    confirmPassword: '',
  }

  static propTypes = {
    onUpdate: PropTypes.func,
    onRegistrationAsync: PropTypes.func,
    onRegistrationError: PropTypes.func,
    onLoading: PropTypes.func,
    password: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    userName: PropTypes.string,
    email: PropTypes.string,
    confirmPassword: PropTypes.string,
  }

  state={
    firstNameErrorMessage: '',
    lastNameErrorMessage: '',
    userNameErrorMessage: '',
    emailErrorMessage: '',
    passwordErrorMessage: '',
    confirmPasswordErrorMessage: '',
  }

  changeModalVisible = () => this.props.onRegistrationError({ name: '', value: '' });

  onClickModal = (e) => {
    e.preventDefault();
    this.changeModalVisible();
  }

  onChangeInput = ({ target: { name, value } }) => this.props.onUpdate({ name, value })

  onBlurInput = ({ target: { name, value } }) => this.setState({ [`${name}ErrorMessage`]: verifyValidation(name, value) });

  onFocusInput = ({ target: { name } }) => {
    this.setState({ [`${name}ErrorMessage`]: '' });
    this.changeModalVisible();
  };

  onBlurInputConfirmPassword = ({ target: { name, value } }) => {
    this.setState({ [`${name}ErrorMessage`]: verifyValidation(name, { value, password: this.props.password }) });
  }

  onSubmit = () => {
    if (Object.values(this.state).every((elem) => !elem)) {
      this.props.onLoading();
      this.props.onRegistrationAsync();
    }
  }

  onClickRegistration = () => {
    this.setState({
      firstNameErrorMessage: verifyValidation(firstName, this.props.firstName),
      lastNameErrorMessage: verifyValidation(lastName, this.props.lastName),
      userNameErrorMessage: verifyValidation(userName, this.props.userName),
      emailErrorMessage: verifyValidation(email, this.props.email),
      passwordErrorMessage: verifyValidation(password, this.props.password),
      confirmPasswordErrorMessage: verifyValidation(confirmPassword, {
        value: this.props.confirmPassword,
        password: this.props.password,
      }),
    }, this.onSubmit);
  }

  render() {
    const {
      firstNameErrorMessage,
      lastNameErrorMessage,
      userNameErrorMessage,
      emailErrorMessage,
      passwordErrorMessage,
      confirmPasswordErrorMessage,
    } = this.state;

    return (
      <div className="form-group">
        <div>
          <h1>Registration Form</h1>
        </div>
        <Modal url="/" onClick={this.onClickModal} />
        <Input
          type="text"
          id={firstName}
          name={firstName}
          label="First Name"
          placeholder="First Name"
          onChange={this.onChangeInput}
          onBlur={this.onBlurInput}
          onFocus={this.onFocusInput}
          errorMessage={firstNameErrorMessage}
        />
        <Input
          type="text"
          id={lastName}
          name={lastName}
          label="Last Name"
          placeholder="Last Name"
          onChange={this.onChangeInput}
          onBlur={this.onBlurInput}
          onFocus={this.onFocusInput}
          errorMessage={lastNameErrorMessage}
        />
        <Input
          type="text"
          id={userName}
          name={userName}
          label="User Name"
          placeholder="User Name"
          onChange={this.onChangeInput}
          onBlur={this.onBlurInput}
          onFocus={this.onFocusInput}
          errorMessage={userNameErrorMessage}
        />
        <Input
          type={email}
          id={email}
          name={email}
          label="Email"
          placeholder="Email"
          onChange={this.onChangeInput}
          onBlur={this.onBlurInput}
          onFocus={this.onFocusInput}
          errorMessage={emailErrorMessage}
        />
        <Input
          type={password}
          id={password}
          name={password}
          label="Password"
          placeholder="Password"
          onChange={this.onChangeInput}
          onBlur={this.onBlurInput}
          onFocus={this.onFocusInput}
          errorMessage={passwordErrorMessage}
        />
        <Input
          type={password}
          id={confirmPassword}
          name={confirmPassword}
          label="Confirm Password"
          placeholder="Confirm Password"
          onChange={this.onChangeInput}
          onBlur={this.onBlurInputConfirmPassword}
          onFocus={this.onFocusInput}
          errorMessage={confirmPasswordErrorMessage}
        />
        <Button
          value="Registration"
          onClick={this.onClickRegistration}
        />
      </div>
    );
  }
}

export default withRouter(connect(
  (state) => ({
    [firstName]: firstNameSelector(state),
    [lastName]: lastNameSelector(state),
    [userName]: userNameSelector(state),
    [email]: emailSelector(state),
    [password]: passwordSelector(state),
    [confirmPassword]: confirmPasswordSelector(state),
    [err]: errSelector(state),
  }),
  {
    onUpdate,
    onRegistrationAsync,
    onRegistrationError,
    onLoading,
  },
)(FormGroupInput));
