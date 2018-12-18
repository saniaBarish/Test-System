import React from 'react';
import {
  BrowserRouter as Router,
  Route, Switch,
  Redirect,
} from 'react-router-dom';

import './App.css';

import LoginPage from '../LoginPage';
import RegistrationPage from '../RegistrationPage';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" render={() => <LoginPage />} />
          <Route path="/registration" render={() => <RegistrationPage />} />
          <Redirect to="/login" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
