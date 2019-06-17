import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './Login.css';
import validateLogin from '../../forms/loginFormValidation/loginFormValidation';
import useForm from '../../forms/useForm';
import { showErrorAlert } from '../../utils/showAlerts';

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
      showErrorAlert('Usuario o contraseña incorrecto!');
    }
  }

    return <React.Fragment>
      <h2 className="form-signin-heading">Bienvenido al YuxiMarket</h2>
      <form className="form-signin" onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="required" htmlFor="email">Correo Electronico</label>
          <input name='email' type="email" className={`${errors.email && 'error-form'}`} onChange={handleChange} value={values.email || ''} required  />
          {errors.email && (
                    <p className="error-info">{errors.email}</p>
                  )}
        </div>
        <div className="form-control">
          <label className="required" htmlFor="password">Contraseña</label>
          <input name='password' type="password" className={`${errors.password && 'error-form'}`}  onChange={handleChange} value={values.password  || ''} required  />
          {errors.password && (
                  <p className="error-info">{errors.password}</p>
                )}
        </div>
        <Button
          className="form-button button-label"
          variant="contained"
          color="primary"
          type="submit">
          Ingresar
      </Button>
      </form>
      <p>Aun no tienes usuario? 
      <Link to="/sign-up">  Crea un nuevo usuario</Link>
      </p>
    </React.Fragment>
}

export default Login;