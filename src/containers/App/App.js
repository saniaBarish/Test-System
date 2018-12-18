import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route, Switch,
  Redirect,
} from 'react-router-dom';


import './App.css';

import { getPhrases, phrasesSelector } from '../../reducers';
import LoginPage from '../../components/LoginPage';
import RegistrationPage from '../../components/RegistrationPage';


class App extends Component {
  onLogin = () => {
    console.log('loggin');
  }

  onRegistration = () => {
    console.log('registration');
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/login" render={() => <LoginPage onLogin={this.onLogin} />} />
            <Route path="/registration" render={() => <RegistrationPage onRegistration={this.onRegistration} />} />
            <Redirect to="/login" />
          </Switch>
          {/* <RegistrationPage /> */}
        </div>
      </Router>
    );
  }
}

export default connect(
  (state) => ({
    phrases: phrasesSelector(state),
  }),
  {
    getPhrases,
  },
)(App);
