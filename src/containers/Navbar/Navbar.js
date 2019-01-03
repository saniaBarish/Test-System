import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Navbar.css';

import ProfileNavbarItems from '../../components/ProfileNavbarItems';

const Navbar = ({ access, onClick }) => {
  const loginLable = access ? 'Logout' : 'Login';
  const profile = access ? <ProfileNavbarItems /> : null;
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
  access: false,
};

Navbar.propTypes = {
  access: PropTypes.bool,
};

export default Navbar;
