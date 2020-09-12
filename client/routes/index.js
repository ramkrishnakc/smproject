import React from 'react';
import {HashRouter, Switch, Route, Link, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import getSideBarItemsAndRouteModules from './helper';
import NavBarComponent from '../components/Navbar';
import SideBarComponent from '../components/Sidebar';
import LoginComponent from '../containers/login';

class App extends React.Component {
  getRoutes = (routeModules) => {
    return (
      <Switch>
        {routeModules.map((module) => (
          <Route
            key={module.name}
            exact={module.routeProps.exact}
            path={module.routeProps.path}
            render={() => <module.routeProps.component title={module.text} />}
          />
        ))}
        <Redirect from="*" to="/404" />
      </Switch>
    );
  };

  getProtectedRoutes = () => {
    const {
      login: {role, username, sidebarCollapsed},
    } = this.props;
    const {routeModules, menuItems} = getSideBarItemsAndRouteModules(role);
    const routesArray = this.getRoutes(routeModules, true);
    return (
      <div className={`${sidebarCollapsed ? 'collapsed-sidebar' : ''}`}>
        <HashRouter>
          <NavBarComponent
            // title={this.state.title}
            username={username}
            logout={() => {}}
            navigateProfile={() => <Link to="/profile" />}
          />
          <SideBarComponent
            sidebarCollapsed={sidebarCollapsed}
            menuItems={menuItems}
            openAppInfo={() => {}}
            toggleSidebar={() => {}}
          />
          {routesArray}
        </HashRouter>
      </div>
    );
  };

  getPublicRoutes = () => {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={LoginComponent} />
          <Redirect from="*" to="/" />
        </Switch>
      </HashRouter>
    );
  };

  render() {
    const {login: isLoggedIn} = this.props;
    return (
      <>{isLoggedIn ? this.getProtectedRoutes() : this.getPublicRoutes()}</>
    );
  }
}

App.defaultProps = {
  login: {
    isLoggedIn: true,
    role: 'admin',
    username: 'ram',
    sidebarCollapsed: false,
  },
};

App.propTypes = {
  login: PropTypes.shape(PropTypes.any),
};
export default connect(
  (state) => ({
    login: state.login,
  }),
  {}
)(App);
