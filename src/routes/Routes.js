import React from 'react';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Home from '../containers/Home';
import ProductList from '../containers/Products';
import ProductDetail from '../containers/ProductDetail';
import About from '../components/Products/About/About';
import PrivateRoute from '../enhancers/PrivateRoute';
import Shopping from '../containers/Shopping';
import WithoutAuthRoute from '../enhancers/WithoutAuthRoute';


const routes = () => {
  return <React.Fragment>
    <WithoutAuthRoute exact path="/" component={Login}></WithoutAuthRoute>
    <WithoutAuthRoute exact path="/sign-up" component={Register}></WithoutAuthRoute>
    <PrivateRoute exact path="/home" component={Home}></PrivateRoute>
    <PrivateRoute path="/home/:id" component={ProductList}></PrivateRoute>
    <PrivateRoute exact path="/product/:id" component={ProductDetail}></PrivateRoute>
    <PrivateRoute exact path="/about" component={About}></PrivateRoute>
    <PrivateRoute exact path="/Shopping" component={Shopping}></PrivateRoute>
  </React.Fragment>
}

export default routes;
