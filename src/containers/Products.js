import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchProducts, clearOldProducts } from '../actions/products';
import { addItemCart } from '../actions/shoopingCart';
import ProductList from '../components/Products/Home/CategoryList/ProductList/ProductList';
const mapStateToProps = (state) => ({
    products: state.products,
    users: state.users
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchProducts,
  clearOldProducts,
  addItemCart
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);