import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  loginUser: state.loginUser,
});

const PrivateRoute =({ component: Component, ...rest }) => {
  const { loginUser } = rest;
  return <Route 
      {...rest}
      render={(props) => {
      return !!Object.keys(loginUser).length
        ? <Component {...props} />
        : <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
      }}
    />
}

export default connect(mapStateToProps)(PrivateRoute);