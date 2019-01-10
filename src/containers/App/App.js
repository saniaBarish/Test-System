import React from 'react';
import { Router } from 'react-router';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './App.css';

import { history } from '../../store/store';
import { authorizationSelector, onLogout } from '../../reducers/profileReducer';
import {
  CREATE_TEST,
  QUESTION_PAGE,
} from '../../helppers/constants';

import PrivateRoute from '../PrivateRoute';
import LoginPage from '../LoginPage';
import Navbar from '../Navbar';
import RegistrationPage from '../RegistrationPage';
import ProfilePage from '../ProfilePage';
import TestPage from '../TestsPage';
import CreateTestPage from '../CreateTestPage';
import QuestionPage from '../QuestionPage';

const mapStateToProps = (state) => ({
  access: authorizationSelector(state),
});

const mapDispatchToProps = (dispatch) => ({ actions: {
  onLogout: () => dispatch(onLogout()),
},
});

const App = ({ access, actions }) => {
  return (
    <Router history={history}>
      <div className="my-app">
        <Navbar access={access} onClick={actions.onLogout} />
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/registration" component={RegistrationPage} />
          <PrivateRoute path="/profile" access={access} component={ProfilePage} />
          <PrivateRoute path="/tests" access={access} component={TestPage} />
          <PrivateRoute path={`/${CREATE_TEST}`} access={access} component={CreateTestPage} />
          <PrivateRoute path={`/${QUESTION_PAGE}`} access={access} component={QuestionPage} />
          <Redirect to="/login" />
        </Switch>
      </div>
    </Router>
  );
};

App.defaultProps = {
  access: false,
};

App.propTypes = {
  access: PropTypes.bool,
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
