import React from 'react';
import PropTypes from 'prop-types';

const User = (props) => (
  <div className="main-content">
    <div className="page-title">{props.title}</div>
    <p>I am at the create user section......!!!!!!!!!</p>
  </div>
);

User.propTypes = {
  title: PropTypes.string.isRequired,
};
export default User;
