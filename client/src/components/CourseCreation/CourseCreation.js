import React from "react";
import { Link,  matchPath, withRouter } from "react-router-dom";
import { List, ListItem} from "../List";
import "./CourseCreation.css";

let routeParams = {};

const routeToLessonCreate = (e, props) => {
  e.preventDefault();
  let unit_id = e.target.getAttribute("data-unit-id");
  props.history.push(`/course-creator/create/course/${routeParams.course_id}/unit/${unit_id}/lesson`);
};

const addUnit = (props) => {
  const newUnit = {};
  newUnit.name = document.getElementById("add-unit-input").value;
  newUnit.lessons = [];
  if (newUnit.name !== '') {
    props.handleAddUnit(props.course._id, newUnit);
  }
};

const renderUnits = props => {
  let unitIndex = 1;
  const units = props.course ? props.course.units : null;
  return (
    <div id="page">
      <div className="container  main-content">
        {
          props.course ? (
            <div>
              <h5 id="course-title">{props.course.title ? props.course.title : ""}</h5>
              <h5 id="course-description">{props.course.synopsis ? props.course.synopsis : ""}</h5>
            </div>
          ) : null
        }
        <List>
          {
            units ? units.map((unit, index) => (
              <div className="container">
                <ListItem key={unit._id}>
                  <div className="row">
                    <div className="col-sm-6">
                      <h5 className="h5-txt"><strong>Unit <span className="unit-number">{index + 1}</span></strong></h5 > 
                    </div>
                    <div className="col-sm-6 text-right">
                    <h5 className="h5-txt">  <span className="unit-name">{unit.name}</span></h5>
                    </div>
                  
                  {/* Render all sub lessons for the current unit */}
                  {
                    <div className="container inner-content">
                      <List>
                        {
                          unit.lessons ? unit.lessons.map((lesson, index) => (
                            <ListItem
                              key={lesson._id}>
                              <h6><strong>Lesson <span className="lesson-number">{index + 1}</span> <span className="lesson-name">{lesson.title}</span></strong></h6>
                            </ListItem>
                          )) : null
                        }
                
                        <ListItem>
                        
                          <button className="btn btn-hopper creator-btn" data-unit-id={unit._id} onClick={(e) => routeToLessonCreate(e, props)}>Add Lesson</button>
                        </ListItem>
                      </List>
                    </div>
                  }
                  </div>
                </ListItem>
              </div>
            )) 
            : null
          }
          <ListItem>
            <div className="container new-unit">
              <input type="text" contentEditable="true" id="add-unit-input" className="add-unit-item" placeholder="Add Unit Title..."></input>
              <button className="btn btn-hopper creator-btn" onClick={() => addUnit(props)}>Add Unit</button>
            </div>
          </ListItem>
        </List>
      </div>
    </div>
  );
};

const parseParams = (location) => {
  const matchProfile = matchPath(location, {
    path: `/course-creator/:action/course/:course_id`,
  });
  return (matchProfile && matchProfile.params) || {};
};

const CourseCreation = props => {
  routeParams = parseParams(props.location.pathname);
  return (
    <div className="main-content">
      {renderUnits(props)}
    </div>
  );
};

export default withRouter(CourseCreation);