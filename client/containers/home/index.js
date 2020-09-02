/* eslint-disable react/no-multi-comp */
import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import SideBarComp from '../sidebar';
// import NavigationBar from './views/navigationBar';
// import { toggleSidebarStyle } from '../../login/loginModule';
// import StaticTitleBar from './views/staticTitleBar';

// class SendToLoginPage extends React.Component {
//   componentDidMount() {
//     errorMsg(errorMessages['33']);
//     browserHistory.push('/');
//   }
//   render() {
//     return <div />;
//   }
// }

class App extends React.Component {
  // componentDidMount() {
  //   this.props.fetchApplicatonSettings();
  // }
  render() {
    const { login } = this.props;

    return (
      <div
        className={`application-container ${
          login.sidebarCollapsed ? 'collapsed-sidebar' : ''
          }`}
      >
        {/* <SideBarComp /> */}
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  login: PropTypes.shape(PropTypes.any),
};
function mapStateToProps(state) {
  return {login: state.login || {}};
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {},
    dispatch
  );
}
export default connect(mapStateToProps, matchDispatchToProps)(App);
