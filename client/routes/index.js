import React from 'react';
import {HashRouter, Switch, Route, Link, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import importedComponent from 'react-imported-component';

import Home from '../containers/home';
// import About from '../containers/about';
// import User from '../containers/user';
// import NotFound from '../containers/404';
import LoginComponent from '../containers/login';
import LoadingComponent from '../components/loader';

import NavBarComponent from '../containers/navbar';
import SideBarComponent from '../containers/sidebar';

const modules = [
  {
    routeProps: {
      path: '/',
      exact: true,
      // filePath: ../ containers / home
      component: Home,
    },
    name: 'Home',
  },
  {
    routeProps: {
      path: '/about',
      component: importedComponent(() => import('../containers/about'), {
        LoadingComponent,
      }),
    },
    name: 'About',
  },
  {
    routeProps: {
      path: '/users',
      component: importedComponent(() => import('../containers/user'), {
        LoadingComponent,
      }),
      // component: User
    },
    name: 'Users',
  },
  {
    routeProps: {
      path: '/404',
      filePath: '../containers/404',
      component: importedComponent(() => import('../containers/404'), {
        LoadingComponent,
      }),
      // component: NotFound
    },
    name: 'NotFound',
  },
];

class App extends React.Component {
  getSideBar = () => {
    if (this.props.isLoggedIn) {
      return '';
    }
    return '';
    // return (
    //   <div>
    //     <nav>
    //       <ul>
    //         <li>
    //           <Link to="/">Home</Link>
    //         </li>
    //         <li>
    //           <Link to="/about">About</Link>
    //         </li>
    //         <li>
    //           <Link to="/users">Users</Link>
    //         </li>
    //       </ul>
    //     </nav>
    //   </div>
    // );
  };

  getNavigationBar = () => {
    // if (this.props.isLoggedIn) {
    //   return '';
    // }
    // return <div>Navigation Bar</div>;
    return '';
  };

  loadComponentDynamically = (filePath) =>
    importedComponent(() => require(filePath), {LoadingComponent});

  getRoutes = () => {
    // Case: User has not logged in
    // if (this.props.isLoggedIn) {
    return (
      <Switch>
        <Route exact path="/" component={LoginComponent} />
        <Redirect from="*" to="/" />
      </Switch>
    );
    // }
    // Case: User has logged in
    // return (
    //   <Switch>
    //     {modules.map((module) => (
    //       <Route
    //         key={module.name}
    //         exact={module.routeProps.exact}
    //         path={module.routeProps.path}
    //         // component={module.routeProps.component}
    //         component={
    //           module.routeProps.component ||
    //           this.loadComponentDynamically(module.routeProps.filePath)
    //         }
    //       />
    //     ))}
    //     <Redirect from="*" to="/404" />
    //   </Switch>
    // );
  };

  render() {
    const {
      login: {role},
    } = this.props;

    return (
      <>
        <HashRouter>
          {this.props.isLoggedIn && (
            <>
            <NavBarComponent />
            <SideBarComponent role={role} />
            </>
          )}
          {this.getRoutes()}
        </HashRouter>
      </>
    );
  }
}

App.defaultProps = {
  login: {},
};

App.propTypes = {
  login: PropTypes.shape(PropTypes.any),
};
export default connect(
  (state) => ({
    login: state.login || {},
  }),
  {}
)(App);
