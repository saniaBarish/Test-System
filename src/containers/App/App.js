import React from 'react';
import { Router, Route } from 'react-router';
import { Redirect, Switch } from 'react-router-dom';

import './App.css';

import LoginPage from '../LoginPage';
import RegistrationPage from '../RegistrationPage';
import { PrivateProfilePage, PrivateTestsPage } from '../../components/PrivateComponent';

import { history } from '../../store/store';

const App = () => {
  return (
    <Router history={history}>
      <div className="my-app">
        <Switch>
          <Route path="/profile" render={() => <PrivateProfilePage />} />
          <Route path="/tests" render={() => <PrivateTestsPage />} />
          <Route path="/login" component={LoginPage} />
          <Route path="/registration" component={RegistrationPage} />
          <Redirect to="/login" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
