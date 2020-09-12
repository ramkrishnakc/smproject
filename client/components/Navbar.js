import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {CircleMenuIcon, RightLabelledIcon} from './Icon';

const NavBar = (props) => (
  <div className="navigation-bar">
    <div className="section-title" />
    <div className="action-items-container">
      <Link to="/profile">
        <CircleMenuIcon
          name="profile"
          label={props.username}
          icon="user"
          clickHandler={props.navigateProfile}
        />
      </Link>
      <RightLabelledIcon
        name="signout"
        label="Sign Out"
        icon="sign-out-alt"
        clickHandler={props.logout}
      />
    </div>
  </div>
);

NavBar.propTypes = {
  username: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
  navigateProfile: PropTypes.func.isRequired,
};

export default NavBar;
