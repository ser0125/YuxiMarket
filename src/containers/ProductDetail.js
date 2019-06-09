import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchProduct, selectImage} from '../actions/products';
import ProductDetail from '../components/Products/CategoryList/ProductDetail/ProductDetail';

const mapStateToProps = (state) => ({
  productDetail: state.productDetail,
  users: state.users
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchProduct,
  selectImage
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);