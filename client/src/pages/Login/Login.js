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
        <div class="jumbotron center-align" id="jumbotron">
          <h1>Grasshopper</h1>
          <h2>Let us teach you our ways</h2>

          <form>
            <label>
              Name:
    <input type="text" name="emailName" id="emailInput" />
            </label>
            <label>
              Password:
              <input type="text" name="passwordName" id="passwordInput" />
            </label>
          </form>
          <div class="button btn btn-primary" id="signIn">Sign In</div>
          <div class="button btn btn-success" id="createAccount">Create Account</div>


        </div>
      </div>
    );
  }
}

export default Login;