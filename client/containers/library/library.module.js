import axios from 'axios';
import {get} from 'lodash';
import Util from '../../../common';

const prefix = 'Library';
const {addPrefix} = Util;
const UPDATE_FORM_FIELD = addPrefix(prefix, 'update_form');
const SUBMIT_FORM = addPrefix(prefix, 'submit_form');
const SUBMIT_FORM_SUCCESS = addPrefix(prefix, 'submit_form_success');
const SUBMIT_FORM_FAILURE = addPrefix(prefix, 'submit_form_failure');

const INITIAL_STATE = {
  create: {
    name: '',
    author: '',
    type: 'Educational/Textbook',
    category: '',
    language: 'English',
    quantity: 1,
    published_date: '',
    description: '',
    image: null,
  },
  formSubmissionStarted: false,
};

/* -------------------------- Login actions ------------------ */
export const updateForm = (payload) => {
  return (dispatch) => dispatch({type: UPDATE_FORM_FIELD, payload});
};

export const submitForm = (payload) => {
  return (dispatch) => {
    dispatch({type: SUBMIT_FORM});
    return axios
      .post('/smapi/library', payload, {})
      .then((res) => {
        if (get(res, 'data.succes')) {
          return dispatch({type: SUBMIT_FORM_SUCCESS});
        }
        return dispatch({type: SUBMIT_FORM_FAILURE});
      })
      .catch((err) => {
        return dispatch({type: SUBMIT_FORM_FAILURE, payload: err});
      });
  };
};

/* --------------------------------- Library reducer ---------------- */
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_FORM_FIELD: {
      return {...state, create: {...state.create, ...action.payload}};
    }
    case SUBMIT_FORM: {
      return {
        ...state,
        formSubmissionStarted: true,
      };
    }
    case SUBMIT_FORM_SUCCESS: {
      return {
        ...state,
        create: INITIAL_STATE.create,
        formSubmissionStarted: false,
      };
    }
    case SUBMIT_FORM_FAILURE: {
      return {
        ...state,
        formSubmissionStarted: false,
      };
    }
    default: {
      return state;
    }
  }
};
export default reducer;
