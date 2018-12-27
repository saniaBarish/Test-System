import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { errSelector as regErrSelector } from '../../reducers/registrationReducer';
import { errSelector as loginErrSelector } from '../../reducers/loginReducer';

import './Modal.css';

const Modal = ({ url, onClick, regErr, logErr }) => {
  if (regErr || logErr) {
    return (
      <div className="modals">
        <a href={url} onClick={onClick}>
          <div className="close-btn">X</div>
        </a>
        <p>{regErr || logErr}</p>
      </div>
    );
  }
  return null;
};

Modal.propTypes = {
  onClick: PropTypes.func,
  url: PropTypes.string,
  regErr: PropTypes.string,
  logErr: PropTypes.string,
};

Modal.defaultProps = {
  onClick: () => {},
  url: '/',
  regErr: '',
  logErr: '',
};

export default connect(
  (state) => ({
    regErr: regErrSelector(state),
    logErr: loginErrSelector(state),
  }),
)(Modal);
