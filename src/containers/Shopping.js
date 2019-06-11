import { connect } from 'react-redux';
import Shopping from '../components/Products/Shopping/Shopping';

const mapStateToProps = (state) => ({
    shoppingCart: state.shoppingCart
});

export default connect(mapStateToProps)(Shopping);