import { ADD_ITEM_CART } from "./actionType";
import { REMOVE_ITEM_CART } from "./actionType";

export const addItemCart = (shoppingCart) => ({
  type: ADD_ITEM_CART,
  payload: shoppingCart
});

export const removeItemCart = (id) => ({
  type: REMOVE_ITEM_CART,
  payload: id
});

