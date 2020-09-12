import {MY_ACTION} from '../actions/types';

const INITIAL_STATE = {
  a_property: 'somevalue',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MY_ACTION:
      return {...action.payload};
    default:
      return state;
  }
};
export default reducer;
