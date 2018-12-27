import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Navbar.css';

import ProfileNavbarItems from '../../components/ProfileNavbarItems';

const Navbar = ({ login, onClick }) => {
  const loginLable = login ? 'Logout' : 'Login';
  const profile = login ? <ProfileNavbarItems /> : null;
  return (
    <div className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <ul>
        <li><h2>Test System</h2></li>
        {profile}
        <Link to="/login">
          <li key="login" className="btn btn-secondary my-2" id="login" onClick={onClick}>{loginLable}</li>
        </Link>
      </ul>
    </div>
  );
};

Navbar.defaultProps = {
  login: false,
};

Navbar.propTypes = {
  login: PropTypes.bool,
};

export default Navbar;
