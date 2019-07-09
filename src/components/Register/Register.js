import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import useForm from '../../forms/useForm';
import validateRegister from '../../forms/registerFormValidation/registerFormValidation';

const Register = (props) => {

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(successRegister, validateRegister);

  function successRegister() {
    const userRegister = props.users.data.find(user => user.email === values.email);
    if (userRegister) {
      alert(`There is another user with this email`);
    } else {
      props.registerUser({
        name: values.name,
        email: values.email,
        password: values.password
      })
      props.history.push('/');
    }
  }
  

  return <React.Fragment>
    <h1 className="form-signin-heading">Registrate en el YuxiMarket</h1>
    <form className="form-signin" onSubmit={handleSubmit}>
      <div className="form-control">
        <label className="required" htmlFor="name">Nombre</label>
        <input name='name' type="text" className={`${errors.name && 'error-form'}`} onChange={handleChange} value={values.name || ''} />
        {errors.name && (
          <p className="error-info">{errors.name}</p>
        )}
      </div>
      <div className="form-control">
        <label className="required" htmlFor="email">Correo Electronico</label>
        <input name='email' type="email" className={`${errors.email && 'error-form'}`} onChange={handleChange} value={values.email || ''} />
        {errors.email && (
          <p className="error-info">{errors.email}</p>
        )}
      </div>
      <div className="form-control">
        <label className="required" htmlFor="password">Contraseña</label>
        <input name='password' type="password" className={`${errors.password && 'error-form'}`} onChange={handleChange} value={values.password || ''} />
        {errors.password && (
          <p className="error-info">{errors.password}</p>
        )}
      </div>
      <div className="form-control">
        <label className="required" htmlFor="password">Confirmar Contraseña</label>
        <input name='confirmPassword' className={`${errors.confirmPassword && 'error-form'}`} type="password" onChange={handleChange} value={values.confirmPassword || ''} />
        {errors.confirmPassword && (
          <p className="error-info">{errors.confirmPassword}</p>
        )}
      </div>
      <Button
        className="form-button button-label"
        variant="contained"
        color="primary"
        type="submit">
        Crear nuevo usuario
      </Button>
    </form>
    <p>Ya tienes un usuario creado?
      <Link to="/"> Ingresa con tu usuario</Link>
    </p>
  </React.Fragment>
}

export default Register;