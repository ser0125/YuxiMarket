
export default {
  categories: {
    isFetching: false,
    data: [],
    error: null,
},
  products: {
      isFetching: false,
      data: [],
      error: null,
  },
  productDetail: {
    isFetching: false,
    id: '',
    title: '',
    pictures: [],
    activeImage: '',
    error: null,
},
  users: {
    data: [],
  },
  loginUser: {},
  shoppingCart: {
    items: [],
    countItems: 2
  }
};