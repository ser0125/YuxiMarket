import React from 'react';
import Login from '../components/Login/Login';
import { Route } from 'react-router-dom';
import Register from '../components/Register/Register';
import Home from '../components/Products/Home/Home';
import ProductList from '../components/Products/CategoryList/ProductList/ProductList';
import About from '../components/Products/About/About';
import ProductDetail from '../components/Products/CategoryList/ProductDetail/ProductDetail';

const routes = () => {
  return <React.Fragment>
      <Route exact path="/" component={Login}></Route>
      <Route exact path="/sign-up" component={Register}></Route>
      <Route path="/home/:id" component={ProductList}></Route>
      <Route exact path="/home" component={Home}></Route>
      <Route exact path="/product/:id" component={ProductDetail}></Route>
      <Route exact path="/about" component={About}></Route>
    </React.Fragment>
}

export default routes;
