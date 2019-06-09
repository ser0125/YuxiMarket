import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loginUser } from '../actions/users';
import Login from '../components/Login/Login';


const mapStateToProps = (state) => ({
  loginUser: state.loginUser,
  users: state.users
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  loginUser
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);