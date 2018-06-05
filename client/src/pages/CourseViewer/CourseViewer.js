import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { Container, Row, Col } from "../../components/Grid";
import { CourseAccordian, AccordianItem } from "../../components/CourseAccordian";
import { List, ListItem } from "../../components/List";
import API from "../../utils/API";
import "./CourseViewer.css";

class CourseOverview extends Component {
  state = {
    course: {title: "title"}
  };

  componentWillMount() {
    const courseId = this.props.match.params.course_id;
    this.loadCourse(courseId);
  }


  loadCourse(courseId) {
    let self = this;
    API.getCourse(courseId)
      .then(res => {
        self.setState( {course: res.data} );
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.handleCourseLoad();
  }

  handleCourseLoad = () => {
    let courseWelcome = document.createElement("div");
    let title = document.createElement("h2");
    title.appendChild(document.createTextNode("Welcome to: " + this.state.course.title));
    let byLine = document.createElement("h4");
    byLine.appendChild(document.createTextNode("By: " + this.state.course.author));
    let description = document.createElement("p");
    description.appendChild(document.createTextNode(this.state.course.synopsis));
    courseWelcome.appendChild(title);
    courseWelcome.appendChild(byLine);
    courseWelcome.appendChild(description);
    document.getElementById("lesson-view").appendChild(courseWelcome);
  };

  handleUnitClick = unitId => {
    document.getElementById("lesson-view").innerHTML = "";
    const unitIndex = this.state.course.units.findIndex(unit => unit._id === unitId);
    let noLessonsElem = document.createElement("li");
    noLessonsElem.appendChild(document.createTextNode("There are no lessons for this unit..."));
    document.getElementById("lesson-view").innerHTML = `<h2>${this.state.course.units[unitIndex].name} Lesson List</h2>`;
    
    let lessonList = document.createElement("ul");
    
    let lessonsArray = this.state.course.units[unitIndex];
    let lessonListItems = lessonsArray.lessons ? lessonsArray.lessons.map(lesson => {
      let lessonItem = document.createElement("li");
      lessonItem.appendChild(document.createTextNode(lesson.title));
      lessonItem.setAttribute("onClick", () => this.handleLessonClick(unitId, lesson._id));
      return lessonItem;
    }) : [noLessonsElem]

    lessonListItems.forEach(listItem => lessonList.appendChild(listItem));

    document.getElementById("lesson-view").appendChild(lessonList);
  };

  handleLessonClick = (unitId, lessonId) => {
    const unitIndex = this.state.course.units.findIndex(unit => unit._id === unitId);
    const lessonIndex = this.state.course.units[unitIndex].lessons.findIndex(lesson => lesson._id === lessonId);;
    let lessonHtml = `<h2>${this.state.course.units[unitIndex].lessons[lessonIndex].title}</h2>`;
    lessonHtml += this.state.course.units[unitIndex].lessons[lessonIndex].body;
    document.getElementById("lesson-view").innerHTML = lessonHtml;
  }

  render() {
    return (
      <div className="main-content">
      <div className="jumbotron jumbotron-fluid">
        
        <div id="course-header">
          <h1>{this.state.course._id}</h1>
        </div>

        <CourseAccordian className="course-accordian">
          {
            this.state.course.units && this.state.course.units.length ? this.state.course.units.map(unit => (
              <AccordianItem key={unit._id} itemId={unit._id} header={unit.name} handleUnitClick={() => this.handleUnitClick(unit._id)}>
                <ul class="accordian-content">
                  {
                    unit.lessons ? unit.lessons.map((lesson, index) => (
                      <li class="accordian-child-item"
                        key={lesson._id}
                        onClick={() => this.handleLessonClick(unit._id, lesson._id)}>
                          <p>{lesson.title}</p>
                      </li>
                    )) : null
                  }
                </ul>
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