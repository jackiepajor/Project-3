import React, { Component } from "react";
import { Container, Row, Col } from "../../components/Grid";
import CourseCreatorInterface from "../../components/CourseCreatorInterface";
import CourseCreation from "../../components/CourseCreation";
import UnitCreation from "../../components/UnitCreation";
import LessonCreation from "../../components/LessonCreation";
import NewCourse from "../../components/NewCourse";
import "./CourseCreator.css";

class CourseCreator extends Component {
    state = {
  
    };

  render() {
    return (
        <div id="bg">
        <NewCourse />
        {/* <UnitCreation />  */}
        {/* <LessonCreation />  */}
        </div>
    );
  }
}

export default CourseCreator;