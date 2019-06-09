import {
 SELECT_IMAGE, REQUEST_PRODUCT, RECEIVE_PRODUCT, ERR_PRODUCT
} from '../actions/actionType';
import initialState from './initialState';

export default (state = initialState.productDetail, action) => {
  switch (action.type) {
    case SELECT_IMAGE:
      return {
        ...state,
        ...action.payload
      };
    case REQUEST_PRODUCT:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_PRODUCT:
      return {
        ...state,
        isFetching: false,
        ...action.payload
      }
    case ERR_PRODUCT:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    default:
      return state
  }
}