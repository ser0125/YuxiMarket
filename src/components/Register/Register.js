import React from 'react';
import Button from '@material-ui/core/Button';
import LoginLayout from '../LoginLayout/LoginLayout';
import {Link} from 'react-router-dom';


const register = () => {
  return <LoginLayout>
    <h1 className="form-signin-heading">Join to YuxiMarket</h1>
    <form className="form-signin">
      <div className="form-control">
        <label className="required" htmlFor="name">Name</label>
        <input name='name' type="text" />
      </div>
      <div className="form-control">
        <label className="required" htmlFor="email">Email</label>
        <input name='email' type="email" />
      </div>
      <div className="form-control">
        <label className="required" htmlFor="password">Password</label>
        <input name='password' type="password" />
      </div>
      <div className="form-control">
        <label className="required" htmlFor="password">Confirm password</label>
        <input name='password' type="password" />
      </div>
      <Button 
      className="form-button"
       variant="contained"
        color="primary"
         type="submit"
         component={Link}
         to="/">
        Create an account
      </Button>
    </form>
    <p>Already have an account?
      <Link to="/"> Sign in</Link>
    </p>
  </LoginLayout>
}

export default register;