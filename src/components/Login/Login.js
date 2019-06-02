import React from 'react';
import Button from '@material-ui/core/Button';
import './Login.css';

import yuxiLogo from '../../assets/YUXI_LOGO_WHITE.svg';

const login = () => {
  return <div className="wrapper">
    <img src={yuxiLogo} alt='yuxi Logo'/>
    <h2 className="form-signin-heading">Sign in to YuxiMarket</h2>
    <form className="form-signin">
      <div className="form-control">
        <label htmlFor="email">Email (Required)</label>
        <input name='email' type="email" />
      </div>
      <div className="form-control">
        <label htmlFor="password">Password (Required)</label>
        <input name='password' type="password"/>
      </div>
        <Button className="form-button" variant="contained" color="primary" type="submit">
        Login
      </Button>
    </form>
    <p>Don't have an account? <a>Create a new account</a></p>
    
  </div>
}

export default login;