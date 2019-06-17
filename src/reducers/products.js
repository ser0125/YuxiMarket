import {
  REQUEST_PRODUCTS, RECEIVE_PRODUCTS, ERR_PRODUCTS, CLEAR_OLD_PRODUCTS, FILTER_SELECT, CLEAR_FILTER
} from '../actions/actionType';
import initialState from './initialState';

export default (state = initialState.products, action) => {
  switch (action.type) {
    case FILTER_SELECT:
      return {
        ...state,
        data: {...state.data, filteredSelected: action.payload}
      };
      case CLEAR_FILTER:
        return {
          ...state,
          data: {...state.data, filteredSelected: ''}
        };
    case REQUEST_PRODUCTS:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        isFetching: false,
        data: {...state.data, ...action.payload}
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