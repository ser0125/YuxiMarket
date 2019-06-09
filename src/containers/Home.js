import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/categories';
import Home from '../components/Products/Home/Home';

const mapStateToProps = (state) => ({
    categories: state.categories,
    users: state.users
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchCategories
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);