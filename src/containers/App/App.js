import React from 'react';
import { Router, Route } from 'react-router';
import { Redirect, Switch } from 'react-router-dom';

import './App.css';

import { history } from '../../store/store';
import { CREATE_TEST } from '../../helppers/constants';

import LoginPage from '../LoginPage';
import RegistrationPage from '../RegistrationPage';
import {
  PrivateProfilePage,
  PrivateTestsPage,
  PrivateCreateTestPage,
} from '../../components/PrivateComponent';

const App = () => {
  return (
    <Router history={history}>
      <div className="my-app">
        <Switch>
          <Route path="/profile" render={() => <PrivateProfilePage />} />
          <Route path="/tests" render={() => <PrivateTestsPage />} />
          <Route path={`/${CREATE_TEST}`} render={() => <PrivateCreateTestPage />} />
          <Route path="/login" component={LoginPage} />
          <Route path="/registration" component={RegistrationPage} />
          <Redirect to="/login" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
