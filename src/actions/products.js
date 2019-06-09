
import {
  REQUEST_PRODUCTS, RECEIVE_PRODUCTS, ERR_PRODUCTS,
  REQUEST_PRODUCT, RECEIVE_PRODUCT, ERR_PRODUCT
} from './actionType';
import { getProducts, getProductDetail } from '../services/api';

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

export const fetchProducts = (id) => (dispatch) => {
  dispatch(requestProducts())
  getProducts(id)
    .then((products) => {
      const resFilter = products.results.slice(0, 18);
      dispatch(receiveProducts(resFilter));
    })
    .catch((error) => dispatch(catchProducts(error)))
}


export const requestProduct = () => ({
  type: REQUEST_PRODUCT,
});

export const receiveProduct = (products) => ({
  type: RECEIVE_PRODUCT,
  payload: products,
});

export const catchProduct = (error) => ({
  type: ERR_PRODUCT,
  payload: error,
});

export const fetchProduct = () => (dispatch) => {
  dispatch(requestProduct())
  getProductDetail()
    .then((products) => {
      dispatch(receiveProduct(products));
    })
    .catch((error) => dispatch(catchProduct(error)))
}