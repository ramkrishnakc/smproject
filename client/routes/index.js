import React from 'react';
import {HashRouter, Switch, Route, Link, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {get} from 'lodash';

import {handleAuth, logout} from '../containers/login/login.module';
import getSideBarItemsAndRouteModules from './helper';
import NavBarComponent from '../components/Navbar';
import SideBarComponent from '../components/Sidebar';
import LoginComponent from '../containers/login';
import Wrapper from './component';

class App extends React.Component {
  componentDidMount() {
    const id = get(this.props, 'login.id');
    if (id) {
      this.props.handleAuth();
    }
  }

  getRoutes = (routeModules) => {
    return (
      <Switch>
        {routeModules.map((module) => (
          <Route
            key={module.name}
            exact={module.routeProps.exact}
            path={module.routeProps.path}
            render={() => (
              <Wrapper title={module.text} breadCrumb={module.breadCrumb}>
                <module.routeProps.component />
              </Wrapper>
            )}
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
            username={username}
            logout={this.props.logout}
            navigateProfile={() => <Link to="/profile" />}
          />
          <SideBarComponent
            sidebarCollapsed={sidebarCollapsed}
            menuItems={menuItems}
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
    const isLoggedIn = get(this.props, 'login.isLoggedIn');
    return (
      <>{isLoggedIn ? this.getProtectedRoutes() : this.getPublicRoutes()}</>
    );
  }
}

App.propTypes = {
  handleAuth: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  login: PropTypes.shape({
    isLoggedIn: PropTypes.bool,
    role: PropTypes.string,
    username: PropTypes.string,
    sidebarCollapsed: PropTypes.bool,
  }).isRequired,
};
const mapStateToProps = (state) => ({
  login: state.login,
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleAuth: () => dispatch(handleAuth()),
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
