import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import { Container, Row, Col } from "../../components/Grid";
import CourseCreatorInterface from "../../components/CourseCreatorInterface";
import CourseCreation from "../../components/CourseCreation";
import UnitCreation from "../../components/UnitCreation";
import LessonCreation from "../../components/LessonCreation";
import NewCourse from "../../components/NewCourse";
import "./CourseCreator.css";

class CourseCreator extends Component {
  state = {
    course: {
      units: [

      ]
    }
  };

  componentWillMount() {
    // if we are modifying an existing course; load in the data and populate state
    const action = this.props.match.params.action;
    if (action === "modify") {
      const courseId = this.props.match.params.course_id;
      
    }

    window.changeComponentState = (stateObject) => {
      this.setState ({stateObject});
    }
  }

  handleAddCourse() {

  }

  handleAddUnit() {

  }

  handleAddLesson() {

  }

  render() {
    return (
        <div id="bg" className="primary-layout">
          <Switch>
            <Route exact path="/course-creator/:action/course/:course_id" component={() => <CourseCreation handleAddCourse={this.handleAddCourse} course={this.state.course}/>} />} />
            {/* <Route exact path="/course-creator/:action/course/:course_id/unit/:unit_id" component={() => <UnitCreation handleAddLesson={this.handleAddLesson}/>} /> */}
            <Route exact path="/course-creator/:action/course/:course_id/unit/:unit_id/lesson/:lesson_id"component={() => <LessonCreation handleAddLesson={this.handleAddLesson}/>} />
            <Redirect to="/" />
          </Switch>
        </div>
    );
  }
}

export default CourseCreator;