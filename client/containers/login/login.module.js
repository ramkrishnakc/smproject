import axios from 'axios';
import {get} from 'lodash';
import Util from '../../../common';

const prefix = 'Login';
const {addPrefix} = Util;
const LOGIN_START = addPrefix(prefix, 'start_login');
const LOGIN_SUCCESS = addPrefix(prefix, 'login_success');
const LOGIN_FAILURE = addPrefix(prefix, 'login_failure');
const TOGGLE_SIDEBAR = addPrefix(prefix, 'toggle_sidebar');
const SESSION_EXPIRED = addPrefix(prefix, 'invalid_session');

const INITIAL_STATE = {
  isLoggedIn: false,
  loginStarted: false,
  role: null,
  username: null,
  id: null,
  sidebarCollapsed: false,
};

/* ----------------------- Helper funtions ------------------- */
const clearLocalStorage = (dispatch) => {
  localStorage.removeItem('reduxState');
  return dispatch({type: SESSION_EXPIRED});
};

/* -------------------------- Login actions ------------------ */
export const toggleSidebar = (value) => {
  return (dispatch) => dispatch({type: TOGGLE_SIDEBAR, payload: value});
};

export const handleAuth = () => {
  return (dispatch) => {
    return axios
      .get('/smapi/checkSession')
      .then((res) => {
        const success = get(res, 'data.success');
        if (success) {
          return '';
        }
        return clearLocalStorage(dispatch);
      })
      .catch(() => clearLocalStorage(dispatch));
  };
};

export const loginStart = (body) => {
  return (dispatch) => {
    dispatch({type: LOGIN_START});
    return axios
      .post('/smapi/login', body)
      .then((res) => {
        const {success, data} = get(res, 'data', {});
        if (success) {
          return dispatch({type: LOGIN_SUCCESS, payload: data});
        }
        return dispatch({type: LOGIN_FAILURE, payload: 'Login failed'});
      })
      .catch((err) => {
        return dispatch({type: LOGIN_FAILURE, payload: err});
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    return axios
      .get('/smapi/destroySession')
      .then(() => clearLocalStorage(dispatch))
      .catch(() => {});
  };
};

/* --------------------------------- Login reducer ---------------- */
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_START: {
      return {...state, loginStarted: true};
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loginStarted: false,
        isLoggedIn: true,
        role: action.payload.role,
        username: action.payload.username,
        id: action.payload.id,
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        loginStarted: false,
        isLoggedIn: false,
      };
    }
    case TOGGLE_SIDEBAR: {
      return {...state, sidebarCollapsed: action.payload};
    }
    case SESSION_EXPIRED: {
      return INITIAL_STATE;
    }
    default: {
      return state;
    }
  }
};
export default reducer;
