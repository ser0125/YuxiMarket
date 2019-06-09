import React from 'react';
import { connect } from 'react-redux';
import MainLayout from '../components/Products/MainLayout/MainLayout';
import LoginLayout from '../components/LoginLayout/LoginLayout';

const mapStateToProps = (state) => ({
  loginUser: state.loginUser,
});

const Layout = ({ component: Component, ...rest }) => {
  const { loginUser } = rest;
 return typeof (loginUser) !== 'undefined'
    ? <MainLayout />
    : <LoginLayout />
}

export default connect(mapStateToProps)(Layout);