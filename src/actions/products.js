
import {
  REQUEST_PRODUCTS, RECEIVE_PRODUCTS, ERR_PRODUCTS, CLEAR_OLD_PRODUCTS,
  REQUEST_PRODUCT, RECEIVE_PRODUCT, ERR_PRODUCT, SELECT_IMAGE, CLEAR_OLD_PRODUCT,
  FILTER_SELECT, CLEAR_FILTER
} from './actionType';
import { getProducts, getProductDetail, getfilterPrice } from '../services/api';
import { formatNumber } from '../utils/decimalSeparation';

const massageProducts = (product) => ({
  id: product.id,
  title: product.title,
  price: product.price,
  thumbnail: product.thumbnail
})

export const clearOldProducts = () => ({
  type: CLEAR_OLD_PRODUCTS,
});

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
      let productsFilter = {
        results: [],
        categoryName: products.filters[0].values[0],
        filterPrice: filtersPrice(products.available_filters)
      }
       productsFilter.results = products.results.slice(0, 18);
       productsFilter.results.forEach((product) => massageProducts(product));
      dispatch(receiveProducts(productsFilter));
    })
    .catch((error) => dispatch(catchProducts(error)))
}


export const filterPrice = (id, filterId) => (dispatch) => {
  dispatch(requestProducts())
  getfilterPrice(id, filterId)
  .then((products) => {
    products.results = products.results.slice(0, 18);
    products.results.forEach((product) => massageProducts(product));
    dispatch(receiveProducts(products));
  })
  .catch((error) => dispatch(catchProducts(error)))
}

const filtersPrice = (filters) => {
  return filters.find(filter => {
    return filter.name === 'Precio'
  }).values;
}

export const filterSelect = (filterName) => ({
  type: FILTER_SELECT,
  payload: filterName
})

export const clearFilter = () =>({
  type: CLEAR_FILTER
})

const massageProduct = (product) => ({
  id: product.id,
  pictures: product.pictures.slice(0, 6),
  activeImage: product.pictures[0].url,
  price: formatNumber(product.price),
  title: product.title
})

export const clearOldProduct = () => ({
  type: CLEAR_OLD_PRODUCT,
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
      const newProduct = massageProduct(product)
      dispatch(receiveProduct(newProduct));
    })
    .catch((error) => dispatch(catchProduct(error)))
}