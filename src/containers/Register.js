import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { registerUser } from '../actions/users';
import Register from '../components/Register/Register';


const mapStateToProps = (state) => ({
  users: state.users
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  registerUser
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Register);