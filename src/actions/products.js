
import { REQUEST_PRODUCTS, RECEIVE_PRODUCTS, ERR_PRODUCTS } from './actionType';
import { getProducts } from '../services/api';
import { addIcon } from '../utils/addIcon';

export const requestProducts = () => ({
  type: REQUEST_PRODUCTS,
});

export const receiveProducts = (products) => ({
  type: RECEIVE_PRODUCTS,
  payload: products,
});

export const catchProducts = (error) => ({
  type: ERR_PRODUCTS,
  payload: error,
});

export const fetchProducts = () => (dispatch) => {
  dispatch(requestProducts())
  getProducts()
  .then((products) => {
    const productsFilter = products.filter((value, index) => index % 2);
    productsFilter.forEach(elem => addIcon(elem));
    dispatch(receiveProducts(elem));
  })
  .catch((error) => dispatch(catchProducts(error)))
}