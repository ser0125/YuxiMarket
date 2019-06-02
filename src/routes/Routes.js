import React from 'react';
import Login from '../components/Login/Login';
import { Route } from 'react-router-dom';
import Register from '../components/Register/Register';

const routes = () => {
  return <React.Fragment>
      <Route exact path="/" component={Login}></Route>
      <Route exact path="/sign-up" component={Register}></Route>
    </React.Fragment>
}

export default routes;
