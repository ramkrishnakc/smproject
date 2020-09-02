import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {CircleMenuIcon, RightLabelledIcon} from './icon';

const NavBar = (props) => {
  // const {breadCrumbText, breadCrumbClickHandler} = getBreadCrumbTextAndHandler(
  //   props.routeInfo
  // );
  return (
    <div className="navigation-bar">
      <div className="section-title">
        <div className="flex vertical-align-center">
          <div
            className="flex vertical-align-center"
            onClick={() => {}}
            role="presentation"
          />
        </div>
      </div>
      <div className="action-items-container">
        <CircleMenuIcon
          name="profile"
          label="label"
          icon="user"
          clickHandler={() => {}}
        />
        <RightLabelledIcon
          name="signout"
          label="Sign Out"
          icon="sign-out-alt"
          clickHandler={() => {
            props.logout(props.authType);
          }}
        />
      </div>
    </div>
  );
};

NavBar.propTypes = {
  logout: PropTypes.func.isRequired,
  authType: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  routeInfo: PropTypes.object.isRequired,
};

export default connect(
  (store) => ({
    authType: store.login,
  }),
  {
    // logout,
  }
)(NavBar);
