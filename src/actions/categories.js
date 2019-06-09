import { getCategories } from "../services/api";
import { RECEIVE_CATEGORIES, REQUEST_CATEGORIES, ERR_CATEGORIES } from './actionType';
import { addIcon } from "../utils/addIcon";

const requestCategories = () => ({
  type: REQUEST_CATEGORIES
});

const receiveCategories = (categories) => ({
  type: RECEIVE_CATEGORIES,
  payload: categories
});

const catchCategories = (error) => ({
  type: ERR_CATEGORIES,
  payload: error
});

export const fetchCategories = () => (dispatch) => {
  dispatch(requestCategories())
  getCategories()
  .then((categories) => {
    const categoriesFilter = categories.filter((value, index) => index % 2);
    categoriesFilter.forEach(elem => addIcon(elem));
    dispatch(receiveCategories(categoriesFilter));
  })
  .catch((error) => dispatch(catchCategories(error)))
}