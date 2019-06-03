import React from 'react';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import './Login.css';
import LoginLayout from '../LoginLayout/LoginLayout';

const login = () => {
  return <LoginLayout>
    <h2 className="form-signin-heading">Sign in to YuxiMarket</h2>
    <form className="form-signin">
      <div className="form-control">
        <label className="required" htmlFor="email">Email</label>
        <input name='email' type="email" />
      </div>
      <div className="form-control">
        <label className="required" htmlFor="password">Password</label>
        <input name='password' type="password" />
      </div>
      <Button 
      className="form-button" 
      variant="contained" 
      color="primary" 
      component={Link}
      to="/home"
      type="submit">
        Login
      </Button>
    </form>
    <p>Don't have an account?
      <Link to="/sign-up"> Create a new account</Link>
    </p>
  </LoginLayout>
}

export default login;