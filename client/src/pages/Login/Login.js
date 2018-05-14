import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import { Container, Row, Col } from "../../components/Grid";

class Login extends Component {
  state = {

  };

  // the "html" (jsx) for the page goes within the render method's return statement, inside the parenthesis
  render() {
    return (
      <div>
        <NavBar />
        <div class="jumbotron">
          <h1>Welcome to Grasshopper</h1>
          <h2>Let us teach you our ways</h2>

          <div class="button btn btn-primary" id="signIn">Sign In</div>
          <div class="button btn btn-danger" id="logout">Logout</div>
        </div>
      </div>
    );
  }
}

export default Login;