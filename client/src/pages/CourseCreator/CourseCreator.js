import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import { Container, Row, Col } from "../../components/Grid";
import CourseCreatorInterface from "../../components/CourseCreatorInterface";
import CourseCreation from "../../components/CourseCreation";
import UnitCreation from "../../components/UnitCreation";
import LessonCreation from "../../components/LessonCreation";
import NewCourse from "../../components/NewCourse";
import API from "../../utils/API";
import "./CourseCreator.css";

class CourseCreator extends Component {
  state = {
    course: {
      units: [
        {
          _id: "434",
          name: "Reading out loud",
          lessons: [
            {title: "foo"},
            {title: "bar"},
            {title: "foo_bar"}
          ]
        },
        {
          _id: "4",
          name: "Reading out silent",
          lessons: [
            {title: "blarg"},
            {title: "blargy"},
            {title: "blargument"}
          ]
        },
        {
          _id: "34",
          name: "Reading illeteracy",
          lessons: [
            {title: "lol"},
            {title: "haha"}
          ]
        },
        {
          _id: "1",
          name: "Loud reading",
          lessons: [

          ]
        },
        {
          _id: "14",
          name: "Loud reading",
          lessons: [

          ]
        },

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

  handleAddCourse(course_id, data) {
    alert("handle add course");
  }

  handleAddUnit(course_id, unit_id, data) {
    alert("handled unit add");
  }

  handleAddLesson(course_id, unit_id, lesson_id, data) {
    alert("handled lesson add");
  }

  render() {
    return (
        <div id="bg" className="primary-layout">
          <Switch>
            <Route exact path="/course-creator/:action/course/:course_id" component={() => <CourseCreation location={this.props.location} handleAddUnit={this.handleAddUnit} course={this.state.course}/>} />} />
            <Route exact path="/course-creator/:action/course/:course_id/unit/:unit_id/lesson/:lesson_id" component={() => <LessonCreation location={this.props.location} handleAddLesson={this.handleAddLesson}/>} />
            <Redirect to="/" />
          </Switch>
        </div>
    );
  }
}

export default CourseCreator;