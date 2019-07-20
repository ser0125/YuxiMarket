import { REGISTER_USER } from "../actions/actionType";
import initialState from "./initialState";

export default (state=initialState.users, action) => {
    switch(action.type) {
      case REGISTER_USER:
        return {
          ...state,
          data: [...state.data, action.payload]
        }
      default:
        return state;
    }
}