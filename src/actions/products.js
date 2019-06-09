
import {
  REQUEST_PRODUCTS, RECEIVE_PRODUCTS, ERR_PRODUCTS,
  REQUEST_PRODUCT, RECEIVE_PRODUCT, ERR_PRODUCT, SELECT_IMAGE
} from './actionType';
import { getProducts, getProductDetail } from '../services/api';
import { formatNumber } from '../utils/decimalSeparation';

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



const massage = (product) => ({
  productDetail: product,
  pictures: product.pictures.slice(0, 6),
  activeImage: product.pictures[0].url,
  price: formatNumber(product.price)
})


export const requestProduct = () => ({
  type: REQUEST_PRODUCT,
});

export const receiveProduct = (product) => ({
  type: RECEIVE_PRODUCT,
  payload: product,
});

export const catchProduct = (error) => ({
  type: ERR_PRODUCT,
  payload: error,
});

export const selectImage = (activeImage) => ({
  type: SELECT_IMAGE,
  payload: activeImage
})

export const fetchProduct = (id) => (dispatch) => {
  dispatch(requestProduct())
  getProductDetail(id)
    .then((product) => {
      const newProduct = massage(product)
      dispatch(receiveProduct(newProduct));
    })
    .catch((error) => dispatch(catchProduct(error)))
}