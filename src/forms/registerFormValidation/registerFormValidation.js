export default function validateRegister(values) {
  let errors = {};
  if (!values.name) {
    errors.name = 'Name is required';
  }
  if (!values.email) {
    errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Password must be 6 or more characters';
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = 'Password is required';
  } else if (!values.password || values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Passwords not match';
  } else if (values.confirmPassword.length < 6) {
    errors.confirmPassword = 'Password must be 6 or more characters';
  }
  return errors;
};