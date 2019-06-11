import { ADD_ITEM_CART } from "../actions/actionType";
import initialState from "./initialState";

export default (state=initialState.shoppingCart, action) => {
    switch(action.type) {
      case ADD_ITEM_CART:
        return {
          ...state,
         items: [...state.items, action.payload],
         countItems: state.countItems + 1
        }
      default:
        return state;
    }
}