import PropTypes from 'prop-types';
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Popup from 'react-poppop';
import FontAwesomeIcon from './FontAwesomeLibrary';
import Logo from '../../static/images/logo.png';

// Each items in Sidebar is represented by <li>
const RenderItems = (props) => {
  const {
    sidebarCollapsed,
    name,
    routePath,
    text,
    icon,
    active,
    activeSideBar,
  } = props;
  return (
    <Link to={routePath}>
      <li
        onClick={() => activeSideBar(name)}
        className={active === name ? 'active' : null}
        name={name}
        role="presentation"
        key={name}
      >
        <>
          <div
            className="menu-icon-container"
            title={sidebarCollapsed ? text : ''}
          >
            <FontAwesomeIcon icon={icon} />
          </div>
          {!sidebarCollapsed && (
            <div className="menu-text-container">{text}</div>
          )}
        </>
      </li>
    </Link>
  );
};
RenderItems.propTypes = {
  routePath: PropTypes.string.isRequired,
  active: PropTypes.string.isRequired,
  activeSideBar: PropTypes.func.isRequired,
  sidebarCollapsed: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

// Sidebar component
const Sidebar = (props) => {
  const [active, setActiveStatus] = useState('dashboard');
  const [openPopup, handlePopup] = useState(false);

  useEffect(() => {
    const location = window.location.href.split('/#/')[1];
    if (location) {
      const pathString = location.split('/')[0];
      if (pathString !== active) {
        setActiveStatus(pathString);
      }
    }
  });

  const {sidebarCollapsed, menuItems, toggleSidebar} = props;
  return (
    <>
      <div className="sidebar">
        <div>
          <div className="logo">
            <img
              src={sidebarCollapsed ? '' : Logo}
              alt="logo"
              name="logo"
              role="presentation"
              onClick={() => handlePopup(true)}
            />
          </div>
          <ul>
            {menuItems.map((item) => (
              <RenderItems
                {...props}
                {...item}
                active={active}
                activeSideBar={(selected) => setActiveStatus(selected)}
              />
            ))}
          </ul>
        </div>
      </div>
      <div
        role="presentation"
        onClick={toggleSidebar}
        className="sidebar-toggler"
      >
        <FontAwesomeIcon
          style={{marginLeft: 3}}
          icon={sidebarCollapsed ? 'angle-right' : 'angle-left'}
        />
      </div>
      <Popup
        position="centerCenter"
        open={openPopup}
        closeOnEsc
        onClose={() => handlePopup(false)}
        contentStyle={{
          borderRadius: '0px',
          padding: '0px',
        }}
      >
        <div className="info-wrapper">
          <h3>School Management Software</h3>
          <div>
            <img src={Logo} alt="logo" name="logo" role="presentation" />
          </div>
          <div>@Copyright 2019</div>
        </div>
      </Popup>
    </>
  );
};

Sidebar.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  sidebarCollapsed: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
