import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import { Container, Row, Col } from "../../components/Grid";

class CourseOverview extends Component {
  state = {

  };

  // the "html" (jsx) for the page goes within the render method's return statement, inside the parenthesis
  render() {
    return (
      <div>
        <h1>This is the course overview page. This is where we should see the particular course and it's sections at a high level.</h1>
      </div>
    );
  }
}

export default CourseOverview;