import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './RegistrationPage.css';

import { loadingSelector } from '../../reducers/loadingReducer';
import Navbar from '../Navbar';
import RegistrationForm from '../RegistrationForm';
import Spinner from '../../components/Spinner';

const RegistrationPage = ({ loading }) => {
  const content = loading ? <Spinner /> : <RegistrationForm />;
  return (
    <div className="registartion">
      <Navbar />
      <div className="bd-example body">
        {content}
      </div>
    </div>
  );
};

RegistrationPage.defaultProps = {
  loading: false,
};

RegistrationPage.propTypes = {
  loading: PropTypes.bool,
};

export default connect(
  (state) => ({
    loading: loadingSelector(state),
  }),
)(RegistrationPage);
