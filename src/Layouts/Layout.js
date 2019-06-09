import React from 'react';
import { connect } from 'react-redux';
import MainLayout from './MainLayout/MainLayout';
import LoginLayout from './LoginLayout/LoginLayout';

const mapStateToProps = (state) => ({
  loginUser: state.loginUser,
});

const Layout = ({  ...rest }) => {
  const { loginUser } = rest;
 return !!Object.keys(loginUser).length
    ? <MainLayout />
    : <LoginLayout />
}

export default connect(mapStateToProps)(Layout);