import { combineReducers } from 'redux';
import vizReducer from './vizReducer';
import authReducer from './AuthReducer';

export default combineReducers({
  vizReducer, authReducer,
});
