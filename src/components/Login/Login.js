import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './Login.css';
import validateLogin from '../../forms/loginFormValidation/loginFormValidation';
import useForm from '../../forms/useForm';

const Login = (props) => {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(successLogin, validateLogin);


 function successLogin() {
    const { users } = props
    const loginUser = users.data.find((user) => user.email === values.email && user.password === values.password);
    if (!!loginUser) {
      props.loginUser(loginUser)
      props.history.push('/home');
    } else {
      alert(`Incorrect user or password`);
    }
  }

    return <React.Fragment>
      <h2 className="form-signin-heading">Sign in to YuxiMarket</h2>
      <form className="form-signin" onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="required" htmlFor="email">Email</label>
          <input name='email' type="email" className={`${errors.email && 'error-form'}`} onChange={handleChange} value={values.email || ''} required  />
          {errors.email && (
                    <p className="error-info">{errors.email}</p>
                  )}
        </div>
        <div className="form-control">
          <label className="required" htmlFor="password">Password</label>
          <input name='password' type="password" className={`${errors.password && 'error-form'}`}  onChange={handleChange} value={values.password  || ''} required  />
          {errors.password && (
                  <p className="error-info">{errors.password}</p>
                )}
        </div>
        <Button
          className="form-button"
          variant="contained"
          color="primary"
          type="submit">
          Login
      </Button>
      </form>
      <p>Don't have an account?
      <Link to="/sign-up"> Create a new account</Link>
      </p>
    </React.Fragment>
}

export default Login;