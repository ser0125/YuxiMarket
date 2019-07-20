import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loginUser, registerUser } from '../actions/users';
import Login from '../components/Login/Login';


const mapStateToProps = (state) => (
  { users: state.users});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  registerUser,
  loginUser
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);