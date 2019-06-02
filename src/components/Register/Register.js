import React from 'react';
import Button from '@material-ui/core/Button';

import yuxiLogo from '../../assets/YUXI_LOGO_WHITE.svg';

const register = () => {
  return <div className="wrapper">
    <img src={yuxiLogo} alt='yuxi Logo'/>
    <h1 className="form-signin-heading">Join to YuxiMarket</h1>
    <form className="form-signin">
    <div className="form-control">
        <label htmlFor="name">Name</label>
        <input name='name' type="text" />
      </div>
      <div className="form-control">
        <label htmlFor="email">Email</label>
        <input name='email' type="email" />
      </div>
      <div className="form-control">
        <label htmlFor="password">Password</label>
        <input name='password' type="password"/>
      </div>
      <div className="form-control">
        <label htmlFor="password">Confirm password</label>
        <input name='password' type="password"/>
      </div>
        <Button className="form-button" variant="contained" color="primary" type="submit">
        Create an account
      </Button>
    </form>
    <p>Already have an account? <a>Sign in</a></p>
    
  </div>
}

export default register;