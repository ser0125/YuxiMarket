import { ADD_ITEM_CART, REMOVE_ITEM_CART, CHANGE_QUANTITY_ITEM } from "./actionType";

export const addItemCart = (shoppingCart) => ({
  type: ADD_ITEM_CART,
  payload: shoppingCart
});

export const removeItemCart = (id) => ({
  type: REMOVE_ITEM_CART,
  payload: id
});

export const changeQuantityItem = (quantityItem) => ({
  type: CHANGE_QUANTITY_ITEM,
  payload: quantityItem
});

