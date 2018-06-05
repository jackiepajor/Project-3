import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { Container, Row, Col } from "../../components/Grid";
import { CourseAccordian, AccordianItem } from "../../components/CourseAccordian";
import { List, ListItem } from "../../components/List";
import API from "../../utils/API";
import "./CourseViewer.css";

class CourseOverview extends Component {
  state = {
    course: {
      _id:"course1",
      title: "course title",
      units: [
        {
          _id: "u1",
          name: "unit 1",
          lessons: [
            {
              _id: "u1L1_id",
              title: "u1L1",
              body: "<p>u1L1 body text</p>"
            },
            {
              _id: "u1L2_id",
              title: "u1L2",
              body: "<p>u1L2 body text</p>"
            }
          ]
        },
        {
          _id: "u2",
          name: "unit 2",
          lessons: [
            {
              _id: "u2L1_id",
              title: "u2L1",
              body: "<p>u2L1 body text</p>"
            },
            {
              _id: "u2L2_id",
              title: "u2L2",
              body: "<p>u2L2 body text</p>"
            }
          ]
        }
      ]
    },
    current_unit: "",
    current_lesson: ""
  };

  handleLessonClick = (unitId, lessonId) => {
    //document.getElementById("lesson-view").innerHTML = this.state.course.units[unitId].lessons[lessonId].body;
    alert("foo");
  }

  render() {
    return (
      <div className="main-content">
      <div className="jumbotron jumbotron-fluid">
        
        <div id="course-header">
          <p>{this.state.course._id}</p>
        </div>

        <CourseAccordian className="course-accordian">
          {
            this.state.course.units && this.state.course.units.length ? this.state.course.units.map(unit => (
              <AccordianItem key={unit._id} itemId={unit._id} header={unit.name}>
                <List>
                  {
                    unit.lessons ? unit.lessons.map((lesson, index) => (
                      <ListItem
                        key={lesson._id}
                        onClick={() => this.handleLessonClick(unit._id, lesson._id)}>
                        <h6>{lesson.title}</h6>
                      </ListItem>
                    )) : null
                  }
                </List>
              </AccordianItem>
            ))
            : null
          }
        </CourseAccordian>

        <div id="lesson-view">

        </div>
      </div>
      </div>
    );
  }
}

export default withRouter(CourseOverview);