import React from 'react';

import "./RegistrationPage.css";

const RegistrationPage = ({onRegistration}) => {
  return(
    <div className="container">
    <div className="col-md-8 order-md-1">
      <h4 className="mb-3">Billing address</h4>
      <form className="needs-validation" novalidate="">
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="firstName">First name</label>
            <input type="text" className="form-control" id="firstName" placeholder="" value="" required=""/>
            <div className="invalid-feedback">
              Valid first name is required.
            </div>
        </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="lastName">Last name</label>
            <input type="text" className="form-control" id="lastName" placeholder="" value="" required=""/>
            <div className="invalid-feedback">
              Valid last name is required.
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="username">Username</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">@</span>
            </div>
            <input type="text" className="form-control" id="username" placeholder="Username" required=""/>
            <div className="invalid-feedback">
              Your username is required.
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
          <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
          <div className="invalid-feedback">
            Please enter a valid email address for shipping updates.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="address">Address</label>
          <input type="text" className="form-control" id="address" placeholder="1234 Main St" required=""/>
          <div className="invalid-feedback">
            Please enter your shipping address.
          </div>
        </div>
        <button class="btn btn-primary btn-lg btn-block" type="button" onClick={onRegistration}>Continue to checkout</button>
      </form>
    </div>
    </div>
  )
}

export default RegistrationPage;