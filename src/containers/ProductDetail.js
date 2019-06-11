import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchProduct, selectImage, clearOldProduct, addItemCart} from '../actions/products';
import ProductDetail from '../components/Products/Home/CategoryList/ProductDetail/ProductDetail';

const mapStateToProps = (state) => ({
  productDetail: state.productDetail,
  users: state.users
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchProduct,
  selectImage,
  clearOldProduct,
  addItemCart
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);