import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
  onClick: () => {},
};

Navbar.propTypes = {
  access: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Navbar;
