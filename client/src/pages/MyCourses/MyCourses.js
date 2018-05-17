import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import { Container, Row, Col } from "../../components/Grid";

class MyCourses extends Component {
  state = {

  };

  // the "html" (jsx) for the page goes within the render method's return statement, inside the parenthesis
  render() {
    return (
      <div>
        <h1>This is the screen that allows us to add, remove, or modify all courses, if a teacher. Otherwise, students will be able to view all of their enrolled courses here at a high level.</h1>
        <h2>My courses</h2>
        <ul>
          <li>Course one</li>
          <li>Course two</li>
          <li>Course three</li>
        </ul>
        <button id="createCourse">Create a course</button>
        <button id="findCourse">Find a course</button>
      </div>
    );
  }
}

export default MyCourses;