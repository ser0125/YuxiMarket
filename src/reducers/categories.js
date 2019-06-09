import {REQUEST_CATEGORIES, RECEIVE_CATEGORIES, ERR_CATEGORIES} from '../actions/actionType';
import initialState from './initialState';

export default (state = initialState.categories, action) => {
  switch (action.type) {
    case REQUEST_CATEGORIES:
      return {
        ...state,
        isFetching: true
        }
    case RECEIVE_CATEGORIES:
      return {
        ...state,
        isFetching: false,
        data: action.payload
      }
      case ERR_CATEGORIES:
        return {
          ...state,
          isFetching: false,
          error: action.payload
        }
      default:
        return state
  }
}