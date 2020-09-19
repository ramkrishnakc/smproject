import {combineReducers} from 'redux';
import loginReducer from '../containers/login/login.module';

const rootReducer = combineReducers({
  login: loginReducer,
});

export default rootReducer;
