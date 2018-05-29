import React from "react";
import { Link, matchPath, withRouter } from "react-router-dom";
import "./LessonCreation.css";

let routeParams = {};

const addLesson = (props) => {
  const newLesson = {};
  newLesson.title = document.getElementById("lesson-title").innerText;
  newLesson.description = document.getElementById("lesson-description").innerText;
  props.handleAddLesson(routeParams.course_id, routeParams.unit_id, newLesson);
};

const parseParams = (location) => {
  const matchProfile = matchPath(location, {
    path: `/course-creator/:action/course/:course_id/unit/:unit_id/lesson/`,
  });
  return (matchProfile && matchProfile.params) || {};
};

const LessonCreation = props => {
    routeParams = parseParams(props.location.pathname);
    return (
      <div className="main-content">
      <br /><br /><br /><br /><br /><br />
    
      <div className="container white-txt">
        <h3 className="display-3"><strong>Lesson Creator</strong></h3>
        <hr />
        <blockquote><strong>How to </strong>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere temporibus mollitia eos ipsa dolore amet laboriosam distinctio. Non quidem tenetur a, rem aperiam exercitationem laborum ratione illum atque? Tempora mollitia ratione recusandae quo explicabo officiis dolores deleniti natus sunt aspernatur.</blockquote>
        <hr />
      </div>

      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h4 className="display-3" id="lesson-title" contentEditable="true">Add Lesson Title...</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <p id="lesson-description" contentEditable="true">Add Description...</p>
            </div>
          </div>
        </div>
        <br />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="input-group mb-3">
                  <div className="input-group-prepend">
                      <button className="btn btn-hopper" type="button">Add</button>
                  </div>
                  <div className="custom-file" id="file-upload">
                      <input type="file" className="custom-file-input"  />
                      <label className="custom-file-label" for="inputGroupFile03">Choose file</label>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="container">
          <button type="button" className="btn btn-hopper btn-course btn-lg" onClick={() => addLesson(props)}>Create Lesson</button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(LessonCreation);