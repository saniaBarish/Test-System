import React from 'react';
import { Link } from 'react-router-dom';

import "./LoginPage.css"


const LoginPage = ({onLogin}) =>{

  return (
    <div className="login-page">
      <form className="form-signin">
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label htmlFor="inputEmail" className="sr-only">Email address</label>
        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autoFocus=""/>  
        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required=""/>
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        <Link to="/registration">
          <button type="button" className="btn btn-danger btn-lg btn-block">Registration</button>
        </Link>
      </form>
    </div>
  )
}

export default LoginPage;