import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { Container, Row, Col } from "../../components/Grid";
import CourseCreatorInterface from "../../components/CourseCreatorInterface";
import CourseCreation from "../../components/CourseCreation";
import UnitCreation from "../../components/UnitCreation";
import LessonCreation from "../../components/LessonCreation";
import NewCourse from "../../components/NewCourse";
import API from "../../utils/API";
import "./CourseCreator.css";

class CourseCreator extends Component {
  state = {};

  componentWillMount() {
    // if we are modifying an existing course; load in the data and populate state
    const action = this.props.match.params.action;
    if (action === "modify") {
      const courseId = this.props.match.params.course_id;
    }

    if (!this.state.categories) {
      this.loadCategories();
    }
    this.loadCourse();
  }

  loadCategories() {
    API.getCategories()
      .then(res => {
        this.setState( {categories: res.data} );
      })
      .catch(err => console.log(err));
  }

  loadCourse() {
    let self = this;
    if (this.state.course) {
      API.getCourse(this.state.course._id)
        .then(res => {
          //this.setState( {course: res.data} );
          self.setState( {course: res.data} );
        })
        .catch(err => console.log(err));
    } else if (window.sessionStorage.course_id) {
      // if session reloaded grab the course id
      API.getCourse(window.sessionStorage.course_id)
        .then(res => {
          //this.setState( {course: res.data} );
          self.setState( {course: res.data} );
        })
        .catch(err => console.log(err));
    }
  };

  handleAddCourse(course) {
    try {
      this.setState({ "course": course });
      //this.setState({ "course": course });
    } catch(err) {
      console.log(err);
    }
  }

  handleAddUnit(course_id, data) {
    let self = this;
    API.createUnit(course_id, data)
      .then(function(dbUnit) {
        //add logic
        self.loadCourse();
      })
      .catch(err => console.log(err));
  }

  handleAddLesson(course_id, unit_id, data) {
    let self = this;
    API.createLesson(course_id, unit_id, data)
      .then(function(dbLesson) {
        self.props.history.push(`/course-creator/create/course/${self.state.course._id}`);
        self.loadCourse();
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
        <div id="bg" className="primary-layout">
          <Switch>
            <Route exact path="/course-creator/:action/course" component={() => <NewCourse location={this.props.location} handleAddCourse={this.handleAddCourse.bind(this)} categories={this.state.categories} course={this.state.course}/>} />
            <Route exact path="/course-creator/:action/course/:course_id" component={() => <CourseCreation location={this.props.location} handleAddUnit={this.handleAddUnit.bind(this)} course={this.state.course} />} />
            <Route exact path="/course-creator/:action/course/:course_id/unit/:unit_id/lesson" component={() => <LessonCreation location={this.props.location} handleAddLesson={this.handleAddLesson.bind(this)} />} />
            <Redirect to="/" />
          </Switch>
        </div>
    );
  }
}

export default withRouter(CourseCreator);