import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './LoginPage.css';

import {
  emailSelector,
  passwordSelector,
  errSelector,
  onUpdate,
  onLoginError,
} from '../../reducers/loginReducer';
import { loadingSelector, onLoading } from '../../reducers/loadingReducer';
import { email, password } from '../../helppers/constants';
import verifyValidation from '../../helppers/verifyValidation';
import { onLoginAsync } from '../../actions';
import Navbar from '../Navbar';
import Login from '../../components/Login';
import Spinner from '../../components/Spinner';

const mapStateToProps = (state) => ({
  email: emailSelector(state),
  password: passwordSelector(state),
  err: errSelector(state),
  loading: loadingSelector(state),
});

class LoginPage extends Component {
  static defaultProps = {
    email: '',
    password: '',
    loading: false,
  }

  static propTypes = {
    onUpdate: PropTypes.func.isRequired,
    email: PropTypes.string,
    password: PropTypes.string,
    onLoginAsync: PropTypes.func.isRequired,
    onLoginError: PropTypes.func.isRequired,
    onLoading: PropTypes.func.isRequired,
    loading: PropTypes.bool,
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
    if (!emailErrorMessage && !passwordErrorMessage) {
      this.props.onLoginAsync(this.onLoadingEnd);
    }
  }

  onClickLogin = () => {
    const { email: mail, password: pas } = this.props;
    this.props.onLoading();
    this.setState({
      emailErrorMessage: verifyValidation(email, mail),
      passwordErrorMessage: verifyValidation(password, pas),
    }, this.onSubmit);
  }

  render() {
    const { emailErrorMessage, passwordErrorMessage } = this.state;
    const content = this.props.loading ? <Spinner /> : (
      <Login
        onChangeInput={this.onChangeInput}
        emailErrorMessage={emailErrorMessage}
        onBlurInput={this.onBlurInput}
        onFocusInput={this.onFocusInput}
        passwordErrorMessage={passwordErrorMessage}
        onClickLogin={this.onClickLogin}
      />
    );
    return (
      <div className="login-page">
        <Navbar />
        {content}
      </div>
    );
  }
}

export default withRouter(connect(
  mapStateToProps,
  {
    onUpdate,
    onLoginAsync,
    onLoginError,
    onLoading,
  },
)(LoginPage));
