import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loginUser } from '../actions/users';
import { registerUser } from '../actions/users';
import Login from '../components/Login/Login';


const mapStateToProps = (state) => {
  console.log(state); 
  return {
  loginUser: state.loginUser,
  users: state.users
}};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  registerUser,
  loginUser
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);