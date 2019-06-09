import initialState from "./initialState";
import { LOGIN_USER, LOGOUT_USER } from "../actions/actionType";

export default (state = initialState.user, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        ...action.payload
      }
      case LOGOUT_USER:
        return {}
      default:
       return state;
  }
}