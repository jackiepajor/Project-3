import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import { Container, Row, Col } from "../../components/Grid";

class ManageCourse extends Component {
  state = {

  };

  // the "html" (jsx) for the page goes within the render method's return statement, inside the parenthesis
  render() {
    return (
      <div>
        <h1>This is the screen that allows a teacher to add, remove, or modify sections of a course.</h1>
      </div>
    );
  }
}

export default ManageCourse;