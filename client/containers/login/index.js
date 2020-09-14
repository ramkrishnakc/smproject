import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
// import {loginStart, checkToken, loginSuccess} from './loginModule';
// import config from '../../config';
import FullScreenLoader from '../../components/FullScreenLoader';
import Logo from '../../../static/images/logo.png';
import FontAwesomeIcon from '../../components/FontAwesomeLibrary';

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
      loading: true,
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

  handlerLogin = () => {
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
      const {username, password} = this.state;
      this.props.loginStart({username, password});
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
        <FullScreenLoader
          title="Loading School Management Software"
          color="#4e517c"
          loaderContainerColor="linear-gradient(to right, #7f90e8, #798bd5, #4e517c, #798bd5)"
        />
      );
    }
    return (
      <div className="login-page">
        <div className="login-form-wrapper">
          <div className="logo-container">
            <img src={Logo} alt="logo" />
          </div>

          <div className="login-form">
            <div className="login-input-wrapper">
              <input
                className="login-input"
                type="text"
                name="username"
                placeholder={this.state.placeholder.username}
                value={this.state.username}
                onChange={this.handler}
                autoComplete="off"
              />
              <FontAwesomeIcon icon="user" className="login-input-icon" />
            </div>
            <div className="login-input-wrapper">
              <input
                className="login-input"
                type="password"
                name="password"
                placeholder={this.state.placeholder.password}
                onChange={this.handler}
                onKeyPress={this.onKeyPress}
                autoComplete="off"
              />
              <FontAwesomeIcon icon="key" className="login-input-icon" />
            </div>
            <button
              type="button"
              className="button submit-button"
              onClick={this.handlerLogin}
              value="Submit"
            >
              LOG IN
            </button>
            <div className="forgot-password">
              <FontAwesomeIcon icon="unlock-alt" />
              <span className="span-label">Forgot Password ? </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginStart: PropTypes.func.isRequired,
  // checkToken: PropTypes.func.isRequired,
  // loginSuccess: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const {login} = state;
  return {login};
}

export default connect(mapStateToProps, {})(Login);
