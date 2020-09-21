import Util from '../../../common';

const prefix = 'Library';
const {addPrefix} = Util;
const UPDATE_FORM_FIELD = addPrefix(prefix, 'update_form');
const SUBMIT_FORM = addPrefix(prefix, 'submit_form');

const INITIAL_STATE = {
  create: {
    name: '',
    author: '',
  },
};

/* -------------------------- Login actions ------------------ */
export const updateForm = (payload) => {
  return (dispatch) => dispatch({type: UPDATE_FORM_FIELD, payload});
};

// export const handleAuth = () => {
//   return (dispatch) => {
//     return axios
//       .get('/smapi/checkSession')
//       .then((res) => {
//         const success = get(res, 'data.success');
//         if (success) {
//           return '';
//         }
//         return clearLocalStorage(dispatch);
//       })
//       .catch(() => clearLocalStorage(dispatch));
//   };
// };

// export const loginStart = (body) => {
//   return (dispatch) => {
//     dispatch({type: LOGIN_START});
//     return axios
//       .post('/smapi/login', body)
//       .then((res) => {
//         const {success, data} = get(res, 'data', {});
//         if (success) {
//           return dispatch({type: LOGIN_SUCCESS, payload: data});
//         }
//         return dispatch({type: LOGIN_FAILURE, payload: 'Login failed'});
//       })
//       .catch((err) => {
//         return dispatch({type: LOGIN_FAILURE, payload: err});
//       });
//   };
// };

// export const logout = () => {
//   return (dispatch) => {
//     return axios
//       .get('/smapi/destroySession')
//       .then(() => clearLocalStorage(dispatch))
//       .catch(() => {});
//   };
// };

/* --------------------------------- Library reducer ---------------- */
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_FORM_FIELD: {
      return {...state, create: {...state.create, ...action.payload}};
    }
    case SUBMIT_FORM: {
      return {
        ...state,
        create: INITIAL_STATE.create,
      };
    }
    default: {
      return state;
    }
  }
};
export default reducer;
