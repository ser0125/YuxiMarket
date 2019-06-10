import {
  SELECT_IMAGE, REQUEST_PRODUCT, RECEIVE_PRODUCT, ERR_PRODUCT, CLEAR_OLD_PRODUCT
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
      case CLEAR_OLD_PRODUCT:
          return initialState.productDetail
    default:
      return state
  }
}