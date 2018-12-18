import React from 'react';
import PropTypes from 'prop-types';

import './RegistrationPage.css';

const RegistrationPage = ({ onRegistration }) => {
  return (
    <div className="container">
      <div className="col-md-8 order-md-1">
        <h4 className="mb-3">Billing address</h4>
        <form className="needs-validation" noValidate="">
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="firstName">
                First name
                <input type="text" className="form-control" id="firstName" placeholder="" defaultValue="" required="" />
              </label>
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
              <label htmlFor="lastName">
                Last name
                <input type="text" className="form-control" id="lastName" placeholder="" defaultValue="" required="" />
              </label>
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="username">
              Username
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">@</span>
                </div>
                <input type="text" className="form-control" id="username" placeholder="Username" required />
                <div className="invalid-feedback">
                  Your username is required.
                </div>
              </div>
            </label>
          </div>

          <div className="mb-3">
            <label htmlFor="email">
              Email
              <span className="text-muted">(Optional)</span>
              <input type="email" className="form-control" id="email" placeholder="you@example.com" />
            </label>
            <div className="invalid-feedback">
              Please enter a valid email address for shipping updates.
            </div>
          </div>
          <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={onRegistration}>Continue to checkout</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;

RegistrationPage.defaultProps = {
  onRegistration: () => {},
};

RegistrationPage.propTypes = {
  onRegistration: PropTypes.func,
};
