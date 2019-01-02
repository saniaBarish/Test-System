import React, { Component } from 'react';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';

import Navbar from '../containers/Navbar';

const withPrivat = (View) => {
  return class extends Component {
    static propTypes = {
      authorization: PropTypes.bool,
      dispatch: PropTypes.func,
    }

    static defaultProps = {
      authorization: false,
      dispatch: () => {},
    }

    componentDidMount() {
      if (!this.props.authorization) {
        this.props.dispatch(push('/login'));
      }
    }

    componentDidUpdate() {
      if (!this.props.authorization) {
        this.props.dispatch(push('/login'));
      }
    }

    onLogout = () => {
      this.props.onLogout();
    }

    render() {
      return (
        <React.Fragment>
          <Navbar login={this.props.authorization} onClick={this.onLogout} />
          <View />
        </React.Fragment>
      );
    }
  };
};

export default withPrivat;
