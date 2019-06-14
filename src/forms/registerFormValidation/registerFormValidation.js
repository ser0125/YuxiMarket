export default function validateRegister(values) {
  let errors = {};
  if (!values.name) {
    errors.name = 'Nombre es obligatorio';
  }
  if (!values.email) {
    errors.email = 'Correo electronico es obligatorio';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Correo electronico es invalido';
  }
  if (!values.password) {
    errors.password = 'Contraseña es obligatoria';
  } else if (values.password.length < 6) {
    errors.password = 'Contraseña debe ser de 6 caracteres o más';
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = 'Contraseña es obligatoria';
  } else if (!values.password || values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Contraseñas no concuerdan';
  } else if (values.confirmPassword.length < 6) {
    errors.confirmPassword = 'Contraseña debe ser de 6 caracteres o más';
  }
  return errors;
};