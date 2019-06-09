import initialState from "./initialState";
import { LOGIN_USER } from "../actions/actionType";

export default (state = initialState.user, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        ...action.payload
      }
      default:
       return state;
  }
}