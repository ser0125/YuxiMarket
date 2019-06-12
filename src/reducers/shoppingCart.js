import { ADD_ITEM_CART, REMOVE_ITEM_CART } from "../actions/actionType";
import initialState from "./initialState";
export default (state = initialState.shoppingCart, action) => {
  switch (action.type) {
    case ADD_ITEM_CART:
      return {
        ...state,
        items: addItem(state, action),
        countItems: state.countItems + 1
      }
    case REMOVE_ITEM_CART:
      return {
        ...state,
        items: removeItem(state, action),
        countItems: state.countItems - 1
      }
    default:
      return state;
  }
}

const addItem = (state, action) => {
  if (state.items.length > 0) {
    let existItem = state.items.find(item => item.id === action.payload.id);
    if (existItem) {
      return state.items.map(item => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            countItems: item.countItems + 1
          }
        }
        return item
      })
    }
  }
  action.payload.countItems = 1;
  return [...state.items, action.payload]
}


const removeItem = (state, action) => {

  return state.items.filter(item => {
    return item.id === action.payload ?
      item.countItems === 1 ? false : true
      : true
  })
    .map(item => {
     return item.id === action.payload ?
        item.countItems > 1 ?
          {
            ...item,
            countItems: item.countItems - 1
          } : item
        : item
    })
}