import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchProducts, clearOldProducts } from '../actions/products';
import ProductList from '../components/Products/CategoryList/ProductList/ProductList';

const mapStateToProps = (state) => ({
    products: state.products,
    users: state.users
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchProducts,
  clearOldProducts
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);