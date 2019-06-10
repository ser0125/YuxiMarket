import {
  REQUEST_PRODUCTS, RECEIVE_PRODUCTS, ERR_PRODUCTS, CLEAR_OLD_PRODUCTS
} from '../actions/actionType';
import initialState from './initialState';

export default (state = initialState.products, action) => {
  switch (action.type) {
    case REQUEST_PRODUCTS:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        isFetching: false,
        data: action.payload
      }
    case ERR_PRODUCTS:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
      case CLEAR_OLD_PRODUCTS:
          return initialState.products
    default:
      return state
  }
}