import { ADD_ITEM_CART } from "./actionType";

export const addItemCart = (shoppingCart) => ({
  type: ADD_ITEM_CART,
  payload: shoppingCart
});
