import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <ul>
        <li><h2>Test System</h2></li>
        <Link to="/home">
          <li className="btn btn-secondary my-2">Home</li>
        </Link>
        <Link to="/login">
          <li className="btn btn-secondary my-2">Login</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
