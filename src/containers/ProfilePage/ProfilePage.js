import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './ProfilePage.css';

import { userSelector } from '../../reducers/profileReducer';

import ProfileData from '../../components/ProfileData';

const ProfilePage = ({ user }) => {
  return (
    <div className="profile-page-body">
      <div className="profile-page-data">
        <h2>Profile</h2>
        <ProfileData user={user} />
      </div>
    </div>
  );
};

ProfilePage.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default connect(
  (state) => ({
    user: userSelector(state),
  }),
)(ProfilePage);
