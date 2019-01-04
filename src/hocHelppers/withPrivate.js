import React, { Component } from 'react';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';

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

    render() {
      return (
        <React.Fragment>
          <View dispatch={this.props.dispatch} />
        </React.Fragment>
      );
    }
  };
};

export default withPrivat;
