

import users from './users';
import loginUser from './loginUser';
import categories from './categories';
import products from './products';
import productDetail from './productDetail';
import { combineReducers } from 'redux';
export default combineReducers({
  users,
  loginUser,
  categories,
  products,
  productDetail
})