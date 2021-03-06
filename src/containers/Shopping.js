import { connect } from 'react-redux';
import { removeItemCart } from '../actions/shoopingCart';
import { changeQuantityItem } from '../actions/shoopingCart';
import Shopping from '../components/Products/Shopping/Shopping';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => ({
    shoppingCart: state.shoppingCart
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    removeItemCart,
    changeQuantityItem
  }, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(Shopping);