import axios from 'axios'

const API_URL = 'https://api.mercadolibre.com';

export const getCategories = () =>
  axios.get(`${API_URL}/sites/MCO/categories`)
  .then((response) => response.data)
