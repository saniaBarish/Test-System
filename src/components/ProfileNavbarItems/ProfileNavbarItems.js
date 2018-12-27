import React from 'react';
import { Link } from 'react-router-dom';

import './ProfileNavbarItems.css';

const ProfileNavbarItems = () => {
  return (
    <React.Fragment>
      <Link to="/profile"><li className="btn btn-secondary my-2">Profile</li></Link>
      <Link to="/tests"><li className="btn btn-secondary my-2">Tests</li></Link>
    </React.Fragment>
  );
};

export default ProfileNavbarItems;
