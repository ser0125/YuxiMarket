import React from 'react';
import Login from '../containers/Login';
import Register from '../containers/Register';
import WithoutAuthRoute from '../enhancers/WithoutAuthRoute';
import { Route, Switch } from 'react-router-dom';
import Page404 from '../components/Page404/Page404';
import Home from '../containers/Home';
import ProductList from '../containers/Products';
import ProductDetail from '../containers/ProductDetail';
import About from '../components/Products/About/About';
import PrivateRoute from '../enhancers/PrivateRoute';
import Shopping from '../containers/Shopping';

const LoginRoutes = () => {
  return <React.Fragment>
    <Switch>
      <WithoutAuthRoute exact path="/" component={Login}></WithoutAuthRoute>
      <WithoutAuthRoute exact path="/sign-up" component={Register}></WithoutAuthRoute><PrivateRoute exact path="/home" component={Home}></PrivateRoute>
      <PrivateRoute path="/home/:id" component={ProductList}></PrivateRoute>
      <PrivateRoute exact path="/product/:id" component={ProductDetail}></PrivateRoute>
      <PrivateRoute exact path="/about" component={About}></PrivateRoute>
      <PrivateRoute exact path="/Shopping" component={Shopping}></PrivateRoute>
      <Route path="*" component={Page404}></Route>
    </Switch>
  </React.Fragment>
}

export default LoginRoutes;
