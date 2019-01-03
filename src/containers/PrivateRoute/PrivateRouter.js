import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ access, component: View, ...routeProps }) => {
  if (access) {
    return <Route {...routeProps} render={() => <View />} />;
  }
  return <Redirect to="/login" />;
};

PrivateRoute.defaultProps = {
  access: false,
};

PrivateRoute.propTypes = {
  access: PropTypes.bool,
};

export default PrivateRoute;
