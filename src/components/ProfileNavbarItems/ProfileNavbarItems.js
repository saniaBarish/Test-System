import React from 'react';
import { Link } from 'react-router-dom';

import './ProfileNavbarItems.css';

import { QUESTION_PAGE } from '../../helppers/constants';

const ProfileNavbarItems = () => {
  return (
    <React.Fragment>
      <Link to={`/${QUESTION_PAGE}`}><li className="btn btn-secondary my-2">Questions</li></Link>
      <Link to="/tests"><li className="btn btn-secondary my-2">Tests</li></Link>
      <Link to="/profile"><li className="btn btn-secondary my-2">Profile</li></Link>
    </React.Fragment>
  );
};

export default ProfileNavbarItems;
