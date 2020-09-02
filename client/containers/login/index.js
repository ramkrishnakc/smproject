import PropTypes from 'prop-types';
import React from 'react';
// import Select from 'react-select';
import {connect} from 'react-redux';
// import {loginStart, checkToken, loginSuccess} from './loginModule';
// import config from '../../config';
// import authTypes from '../../static/auth_types.json';
import FullScreenLoader from '../../components/FullScreenLoader';

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tokenNotExpired: true,
      username: '',
      password: '',
      placeholder: {
        username: 'Username',
        password: 'Password',
      },
      active: {},
      loading: true,
      authType: {
        id: 1,
        value: 'Director Console',
        name: 'dc_auth',
      },
    };
  }

  // componentWillMount() {
  //   if (SERVER) {
  //     return false;
  //   }

  //   const adfsData = this.props.location.query.adfs_data;
  //   const {status, message} = this.props.location.query;
  //   if (status === 'error') {
  //     errorMsg(message);
  //   }

  //   if (adfsData) {
  //     const decodedData = JSON.parse(window.atob(adfsData));
  //     if (decodedData.authType === 'adfs_auth') {
  //       this.props.loginSuccess(decodedData);
  //     }
  //   } else if (
  //     window.localStorage.getItem('token') &&
  //     this.props.location.pathname === '/' &&
  //     !this.props.login.logout
  //   ) {
  //     const expiredDate = window.localStorage.getItem('expired-date');
  //     if (expiredDate) {
  //       const remainingHours =
  //         Math.round(new Date() - new Date(expiredDate)) / 36e5;
  //       if (remainingHours > config.tokenExpiredHours) {
  //         this.setState({tokenNotExpired: false});
  //         return false;
  //       }
  //     }
  //     this.props.checkToken();
  //   }
  // }

  componentDidMount() {
    this.setState({loading: false});
  }

  handler = (e) => {
    Object.keys(this.state).forEach((item) => {
      const obj = {};
      if (item === e.target.getAttribute('name')) {
        obj[item] = e.target.value;
        this.setState(obj);
      }
    });
  };

  selectHandler = (e) => {
    if (e) {
      this.setState({authType: e});
    }
  };

  handlerLogin = (e) => {
    const errorMsg = {};
    let isInvalid = true;

    if (!this.state.username) {
      isInvalid = false;
      errorMsg.username = 'Username is required.';
    }

    if (!this.state.password) {
      isInvalid = false;
      errorMsg.password = 'Password is required.';
    }
    if (!isInvalid) {
      this.setState({placeholder: errorMsg});
    } else {
      const {username, password, authType} = this.state;
      this.props.loginStart({username, password, authType: authType.name});
    }
  };

  onKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handlerLogin();
    }
  };

  render() {
    if (this.state.loading) {
      return (
        <FullScreenLoader title="Loading Director Console" color="#2b3050" />
      );
    }

    return (
      <div className="login-page">
        <div className="login-form-wrapper">
          <div className="logo-container">
            <img
              src="img/login/director_console_logo.svg"
              alt="director-console-logo"
            />
          </div>
          <div className="login-form">
            <div className="flex horizontal-align-center">
              <a href="/api/adfs/login" className="dc-hyperlink">
                ADFS Sign In
              </a>
            </div>
            <p className="message-seperator">or</p>
            <div className="login-form">
              <div className="input-field hide-clear-button">
                {/* <Select
                  disabled={false}
                  id="auth_type"
                  name="auth_type"
                  className="auth_type"
                  placeholder="Select Authentication Type"
                  labelKey="value"
                  value={this.state.authType}
                  options={authTypes}
                  onChange={this.selectHandler}
                /> */}
                {/* <label htmlFor="name">Select Authentication Type</label> */}
              </div>
              <div style={{position: 'relative'}}>
                <input
                  className="login-input username-input override-chrome-autofill-style"
                  type="text"
                  name="username"
                  placeholder={this.state.placeholder.username}
                  value={this.state.username}
                  onChange={this.handler}
                />
                <span className="bg-image username-input-image" />
              </div>
              <div style={{position: 'relative'}}>
                <input
                  className="login-input password-input override-chrome-autofill-style"
                  type="password"
                  name="password"
                  placeholder={this.state.placeholder.password}
                  onChange={this.handler}
                  onKeyPress={this.onKeyPress}
                />
                <span className="bg-image password-input-image" />
              </div>

              <button
                type="button"
                className="button submit-button"
                onClick={this.handlerLogin}
                value="Submit"
              >
                LOG IN
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginStart: PropTypes.func.isRequired,
  checkToken: PropTypes.func.isRequired,
  loginSuccess: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const {login} = state;
  return {login};
}

export default connect(mapStateToProps, {})(Login);
