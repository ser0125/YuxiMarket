import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logoutUser } from '../../../actions/users';

function LogoutButton (props) {
  return !!Object.keys(props.loginUser).length && 
    <button className='log-out-button' onClick={props.logoutUser}>CERRAR SESIÓN</button>
}

const mapStateToProps = (state) => ({
  loginUser: state.loginUser,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  logoutUser,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LogoutButton);