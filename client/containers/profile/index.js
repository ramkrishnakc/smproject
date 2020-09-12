import React from 'react';
import PropTypes from 'prop-types';

const Profile = (props) => (
  <div className="main-content">
    <div className="page-title">{props.title}</div>
    <p>I am at the Profile page......!!!!!!!!!</p>
  </div>
);

Profile.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Profile;
