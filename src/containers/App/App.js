import React, { Component } from 'react';
import { connect } from 'react-redux';


import './App.css';

import { getPhrases, phrasesSelector } from '../../reducers';


class App extends Component {
    state = {
      logged: false,
    }

    render(){
        
        return(
            <button onClick={this.props.getPhrases}>Hello World</button>
        )
    }
}

export default connect(
    state => ({
        phrases: phrasesSelector(state)
    }),
    {
        getPhrases: getPhrases,
    }
)(App);
