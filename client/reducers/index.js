import {combineReducers} from 'redux';
import loginReducer from '../containers/login/login.module';
import libraryReducer from '../containers/library/library.module';

const rootReducer = combineReducers({
  login: loginReducer,
  library: libraryReducer,
});

export default rootReducer;
