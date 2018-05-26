import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Login.css';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
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

    axios.post('/api/auth/register', { username, password })
      .then((result) => {
        this.props.history.push("/login")
      });
  }

  render() {
    const { username, password } = this.state;
    return (
      <div id="content">
        <div className="container" id="main-content">
          <div className="container" id="jumbo">
            <form className="form-signin" onSubmit={this.onSubmit}>
              <h2 className="display-4"><strong>Create Profile</strong></h2>
              <label for="inputEmail" className="sr-only">Email address</label>
              <input type="email" className="form-control" placeholder="Email address" name="username" value={username} onChange={this.onChange} required/>
              <label for="inputPassword" className="sr-only">Password</label>
              <input type="password" className="form-control" placeholder="Password" name="password" value={password} onChange={this.onChange} required/>
              <button className="btn btn-hopper btn-lg btn-block" type="submit" id="reg-btn">Register</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
