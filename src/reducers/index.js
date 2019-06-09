

import users from './users'
import loginUser from './loginUser'
import { combineReducers } from 'redux';
export default combineReducers({
  users,
  loginUser
})