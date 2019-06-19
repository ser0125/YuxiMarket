import React from 'react';
import { Route } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from '../../../../../AppData/Local/Microsoft/TypeScript/3.5/node_modules/redux';
import { logoutUser } from '../actions/users';

const mapStateToProps = (state) => ({
  loginUser: state.loginUser,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  logoutUser
}, dispatch);

const clearUser = (logoutUser, props, Component) =>{
  logoutUser();
  return <Component {...props}/>
} 
const WithoutAuthRoute =({ component: Component, ...rest }) => {
  const { loginUser, logoutUser } = rest;
  return <Route 
      {...rest}
      render={(props) => {
      return !!Object.keys(loginUser).length
        ? clearUser(logoutUser, props, Component)
        : <Component {...props}/>
      }}
    />
}

export default connect(mapStateToProps, mapDispatchToProps)(WithoutAuthRoute);