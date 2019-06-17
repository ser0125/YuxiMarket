import axios from 'axios'

const API_URL = 'https://api.mercadolibre.com';

export const getCategories = () =>
  axios.get(`${API_URL}/sites/MCO/categories`)
    .then(response => response.data)

export const getProducts = (categoryId) =>
  axios.get(`${API_URL}/sites/MCO/search?category=${categoryId}`)
    .then(response => response.data)

export const getProductDetail = (productId) =>
  axios.get(`${API_URL}/items/${productId}`)
    .then(response => response.data)

export const getfilterPrice = (categoryId, filterId) =>
  axios.get(`${API_URL}/sites/MCO/search?category=${categoryId}&price=${filterId}`)
    .then(response => response.data)