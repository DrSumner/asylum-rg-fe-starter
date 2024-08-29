import { combineReducers } from 'redux';
import vizReducer from './vizReducer';
//import authReducer from './authReducer';

export default combineReducers({
  vizReducer, 
 // auth: authReducer,
});
