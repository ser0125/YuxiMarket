import React from 'react';
import Login from '../containers/Login';
import { Route } from 'react-router-dom';
import Register from '../containers/Register';
import Home from '../containers/Home';
import ProductList from '../containers/Products';
import ProductDetail from '../containers/ProductDetail';
import About from '../components/Products/About/About';
import PrivateRoute from '../enhancers/PrivateRoute';


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
