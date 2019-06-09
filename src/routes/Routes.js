import React from 'react';
import Login from '../containers/Login';
import { Route } from 'react-router-dom';
import Register from '../containers/Register';
import Home from '../components/Products/Home/Home';
import ProductList from '../components/Products/CategoryList/ProductList/ProductList';
import About from '../components/Products/About/About';
import ProductDetail from '../components/Products/CategoryList/ProductDetail/ProductDetail';
import PrivateRoute from '../enhancers/PrivateRoute';
import Layout from '../Layouts/Layout';

const routes = () => {
  return <React.Fragment>
      <Route exact path="/" component={Login}></Route>
      <Route exact path="/sign-up" component={Register}></Route>
    <PrivateRoute exact path="/home" component={Home}></PrivateRoute>
    <PrivateRoute path="/home/:id" component={ProductList}></PrivateRoute>
    <PrivateRoute exact path="/product/:id" component={ProductDetail}></PrivateRoute>
    <PrivateRoute exact path="/about" component={About}></PrivateRoute>
  </React.Fragment>
}

export default routes;
