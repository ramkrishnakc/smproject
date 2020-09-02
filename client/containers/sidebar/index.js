import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import FontAwesomeIcon from '../../components/FontAwesomeLibrary';

export class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'dashboard',
      openPopup: false,
      dataFetched: false,
    };
  }

  // componentWillMount() {
  //   if (!SERVER) {
  //     const refreshUrl = window.location.pathname.split('/')[1];
  //     if (refreshUrl !== this.state.active) {
  //       this.setState({ active: refreshUrl });
  //     }
  //   }
  // }

  // componentWillReceiveProps() {
  //   const refreshUrl = window.location.pathname.split('/')[1];
  //   if (refreshUrl !== this.state.active) {
  //     this.setState({ active: refreshUrl });
  //   }
  // }

  // onClose = () => {
  //   if (this.state.dataFetched) {
  //     this.props.clearDashboardData();
  //   }
  //   this.setState({ openPopup: false, dataFetched: false });
  // };

  getMenuItem = ({name, icon, text}, sidebarCollapsed) => (
    <li
      onClick={() => {
        this.activeSideBar(name);
      }}
      className={this.state.active === name ? 'active' : null}
      name={name}
      role="presentation"
      key={name}
    >
      <div className="menu-icon-container" title={sidebarCollapsed ? text : ''}>
        <FontAwesomeIcon icon={icon} />
      </div>
      {!sidebarCollapsed && <div className="menu-text-container">{text}</div>}
    </li>
  );

  getAuthorizedRoles = () => {
    const allRoles = {
      admin: {name: 'admin', text: 'Users', icon: 'users'},
      license: {name: 'license', text: 'License', icon: 'key'},
      authentication: {
        name: 'authentication',
        text: 'Authentication',
        icon: 'th',
      },
      // ldap: {name: 'ldap', text: 'LDAP', icon: 'portrait'},
      // adfs: {name: 'adfs', text: 'AD FS', icon: 'portrait'},
      /* profile: {name: 'profile', text: 'Profile'}, */
      dashboard: {name: 'dashboard', text: 'Dashboard', icon: 'tachometer-alt'},
      search: {name: 'search', text: 'Search', icon: 'search'},
      assets: {name: 'assets', text: 'Assets', icon: 'th'},
      tasks: {name: 'tasks', text: 'Tasks', icon: 'tasks'},
      configure: {name: 'configure', text: 'Configure', icon: 'cog'},
      'config-view': {
        name: 'config-view',
        text: 'Config View',
        icon: 'sitemap',
      },
      user: {name: 'user', text: 'Users', icon: 'users'},
      backupAndRestore: {
        name: 'dcSettings',
        text: 'Settings',
        icon: 'cog',
      },
    };

    return [
      allRoles.dashboard,
      allRoles.search,
      allRoles.configure,
      allRoles['config-view'],
      allRoles.assets,
      allRoles.user,
      allRoles.license,
      allRoles.tasks,
    ];

    // if (this.props.login.role === 'root') {
    //   return [
    //     allRoles.license,
    //     allRoles.admin,
    //     allRoles.authentication,
    //     allRoles.backupAndRestore,
    //   ];
    //   // const {admin, license, ldap, adfs /* profile */} = allRoles;
    //   // return [admin, license, ldap, adfs /* profile */];
    // }
    // if (this.props.login.role === 'admin') {
    //   return [
    //     allRoles.dashboard,
    //     allRoles.search,
    //     allRoles.configure,
    //     allRoles['config-view'],
    //     allRoles.assets,
    //     allRoles.user,
    //     allRoles.license,
    //     allRoles.tasks,
    //   ];
    // }
    // if (this.props.login.role === 'user') {
    //   return [
    //     allRoles.dashboard,
    //     allRoles.search,
    //     allRoles.configure,
    //     allRoles['config-view'],
    //     allRoles.assets,
    //     allRoles.tasks,
    //   ];
    // }
    // return [];
  };

  activeSideBar = (selected) => {
    if (
      selected === this.state.active &&
      window.location.pathname.split('/').length <= 2
    )
      return false;
    this.setState({active: selected});
    return true;
  };

  render() {
    const {version, toggleSidebarStyle, sidebarCollapsed} = this.props;
    const authorizedRoles = this.getAuthorizedRoles();
    return (
      <>
        <div className="sidebar">
          <div>
            <div className="logo">
              <img
                src={
                  sidebarCollapsed ? './images/logo.png' : './images/logo.png'
                }
                alt="logo"
                name="logo"
                role="presentation"
                // onClick={() => {
                //   // api/fabric are always present no matter what in a director setup
                //   // if the api/fabric are pre-existing, do not fetch data
                //   if (!(version.api && version.fabric)) {
                //     this.setState({ dataFetched: true });
                //     this.props.fetchPoolLpDiagData('VERSION');
                //   }
                //   this.setState({ openPopup: !this.state.openPopup });
                // }}
              />
            </div>
            <ul>
              <div>
                {authorizedRoles.map((role) =>
                  this.getMenuItem(role, sidebarCollapsed)
                )}
              </div>
            </ul>
          </div>
        </div>
        <div
          role="presentation"
          onClick={toggleSidebarStyle}
          className="sidebar-toggler"
        >
          <FontAwesomeIcon
            style={{marginLeft: 3}}
            icon={sidebarCollapsed ? 'angle-right' : 'angle-left'}
          />
        </div>
      </>
    );
  }
}
SideBar.propTypes = {
  login: PropTypes.shape({role: PropTypes.string}).isRequired,
};
export default connect(
  (state) => ({
    login: state.login || {},
  }),
  {}
)(SideBar);
