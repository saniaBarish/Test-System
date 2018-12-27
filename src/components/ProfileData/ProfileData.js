import React from 'react';
import PropTypes from 'prop-types';

import './ProfileData.css';

import ItemList from '../ItemList';

const ProfileData = ({ user: { firstName, lastName, userName, email } }) => {
  const elements = ['First Name:', 'Last Name:', 'User Name:', 'Email:'];
  return (
    <React.Fragment>
      <div className="profile-img">there should be a photo, but ...</div>
      <ItemList elements={elements} />
      <ItemList elements={[firstName, lastName, userName, email]} />
    </React.Fragment>
  );
};

ProfileData.propTypes = {
  user: PropTypes.object,
};

ProfileData.defaultProps = {
  user: {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
  },
};

export default ProfileData;
