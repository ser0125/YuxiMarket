import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import LoginLayout from '../LoginLayout/LoginLayout';
import { Link } from 'react-router-dom';
import usersData from '../../reducers/initialState';



class register extends Component {
  state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
  }

   handleSubmit = (event) => {
    event.preventDefault();
    const { email } = this.state;
    const userRegister = this.props.users.data.find(user => user.email === email);
    if(userRegister){
      alert(`There is another user with this email`);
    } else {
      this.props.registerUser({
        name: this.state.fullName,
        email: this.state.email,
        password: this.state.password
      })
      this.props.history.push('/');
    }
  }
  
    handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    }
  render() {
    return <LoginLayout>
      <h1 className="form-signin-heading">Join to YuxiMarket</h1>
      <form className="form-signin" onSubmit={this.handleSubmit}>
        <div className="form-control">
          <label className="required" htmlFor="name">Name</label>
          <input name='name' type="text" onChange={this.handleChange} />
        </div>
        <div className="form-control">
          <label className="required" htmlFor="email">Email</label>
          <input name='email' type="email" onChange={this.handleChange} />
        </div>
        <div className="form-control">
          <label className="required" htmlFor="password">Password</label>
          <input name='password' type="password" onChange={this.handleChange} />
        </div>
        <div className="form-control">
          <label className="required" htmlFor="password">Confirm password</label>
          <input name='confirmPassword' type="password" onChange={this.handleChange} />
        </div>
        <Button
          className="form-button"
          variant="contained"
          color="primary"
          type="submit">
          Create an account
      </Button>
      </form>
      <p>Already have an account?
      <Link to="/"> Sign in</Link>
      </p>
    </LoginLayout>
  }
}

export default register;