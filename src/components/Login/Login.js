import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './Login.css';

class Login extends Component {
  state = {
    email: '',
    password: '',
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { users } = this.props
    const { email, password } = this.state;
      const loginUser = users.data.find((user) => user.email === email && user.password === password);
      if (!!loginUser) {
        this.props.loginUser(loginUser)
        this.props.history.push('/home');
      } else {
        alert(`Incorrect user or password`);
      }
  }


  render() {
    return <React.Fragment>
      <h2 className="form-signin-heading">Sign in to YuxiMarket</h2>
      <form className="form-signin" onSubmit={this.handleSubmit}>
        <div className="form-control">
          <label className="required" htmlFor="email">Email</label>
          <input name='email' type="email" onChange={this.handleChange} />
        </div>
        <div className="form-control">
          <label className="required" htmlFor="password">Password</label>
          <input name='password' type="password" onChange={this.handleChange} />
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
}

export default Login;