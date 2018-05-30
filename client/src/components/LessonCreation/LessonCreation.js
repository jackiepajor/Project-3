import React from "react";
import { Link, matchPath, withRouter } from "react-router-dom";
import ReactQuill from 'react-quill';
import Editor from '../Editor/Editor';
import "./LessonCreation.css";
import 'react-quill/dist/quill.snow.css';

let routeParams = {};

const addLesson = (props) => {
  const newLesson = {};
  newLesson.title = document.getElementById("lesson-title").value;
  newLesson.description = document.getElementById("lesson-description").value;
  
  let editorText = document.getElementsByClassName('ql-editor')[0].innerHTML;
  newLesson.body = editorText;
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
      </div>

      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <input type="text" className="display-7" id="lesson-title" contentEditable="true" placeholder="Add Lesson Title..."></input>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <input type="text" className="display-3" id="lesson-description" contentEditable="true" placeholder="Add Description..."></input>
            </div>
          </div>
        </div>
        <br />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div id="edit-container">
                    <Editor 
                    placeholder="Start Creating Your Lesson Here..." 
                    value={props.lessonText}
                    onChange={(value) => props.handleLessonChange(value)}/>
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