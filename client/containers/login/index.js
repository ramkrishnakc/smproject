import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {loginStart} from './login.module';
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
    const showLoader =
      this.state.loading || (this.props.login && this.props.login.loginStarted);
    if (showLoader) {
      return (
        <FullScreenLoader
          title="School Management Software"
          color="#4e517c"
          loaderContainerColor="#4e517c"
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
  login: PropTypes.objectOf.isRequired,
};

const mapStateToProps = (state) => ({
  login: state.login,
});

const mapDispatchToProps = (dispatch) => {
  return {
    loginStart: (body) => dispatch(loginStart(body)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
