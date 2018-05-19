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
        <div class="jumbotron">
        <h1>Course Manager</h1>
        <h3>In this section, you are able to add, modify, and delete courses</h3>
        </div>
     
        <Container>
                <Row>
                  <Col size="lg-4">
                    <h2>Create</h2>
                  </Col>
                  <Col size="lg-4">
                  <h2>Modify</h2>
                  </Col>
                  <Col size="lg-4">
                  <h2>Delete</h2>
                  </Col>
                </Row>
        
              </Container>
       
      </div>
    );
  }
}

export default ManageCourse;