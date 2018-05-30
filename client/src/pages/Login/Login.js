import React, { Component } from "react";
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from "../../components/NavBar";
import { Container, Row, Col } from "../../components/Grid";
import "./login.css";

class Login extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      message: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { username, password } = this.state;

    axios.post('/api/auth/login', { username, password })
      .then((result) => {
        localStorage.setItem('jwtToken', result.data.token);
        this.setState({ message: '' });
        this.props.history.push('/')
      })
      .catch((error) => {
        if(error.response.status === 401) {
          this.setState({ message: 'Login failed. Username or password not match' });
        }
      });
  }

 

  // the "html" (jsx) for the page goes within the render method's return statement, inside the parenthesis
  render() {
    const { username, password, message } = this.state;
    return (
      <div id="content">
        <div class="container" id="main-content">
          <div className="container" id="jumbo">
            <form class="form-signin" onSubmit={this.onSubmit}>
              {message !== '' &&
                <div class="alert alert-warning alert-dismissible" role="alert">
                  { message }
                </div>
              }
              <h2 class="display-4"><strong>Sign In</strong></h2>
              <label for="inputEmail" class="sr-only">Email address</label>
              <input type="email" class="form-control" placeholder="Email address" name="username" value={username} onChange={this.onChange} required/>
              <label for="inputPassword" class="sr-only">Password</label>
              <input type="password" class="form-control" placeholder="Password" name="password" value={password} onChange={this.onChange} required/>
              <button class="btn btn-hopper btn-lg btn-block" type="submit">Login</button>
              <p>
                Not a member? <a href="/register" id="register-link">Register Here</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;