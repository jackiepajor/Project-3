import React from "react";
import { Link,  matchPath } from "react-router-dom";
import { List, ListItem} from "../List";
import "./CourseCreation.css";

let routeParams = {};

const renderLessons = lessons => {
  return (
      <div className="container inner-content">
      <List>
        {
          lessons.map((lesson, index) => (
            <ListItem
              key={lesson._id}>
              <h6><strong>Lesson <span className="lesson-number">{index + 1}</span> <span className="lesson-name">{lesson.title}</span></strong></h6>
            </ListItem>
          ))
        }
        <ListItem>
          <button className="btn btn-hopper creator-btn"><Link className="react-link" to="/course-creator/:action/course/:course_id/unit/:unit_id/lesson">Add Lesson</Link></button>
        </ListItem>
      </List>
      </div>
    
  );
}

const renderUnits = props => {
  let unitIndex = 1;
  const units = props.course.units;
  return (
    <div id="page">
    <div className="container  main-content">
    <List>
      {
        units.map((unit, index) => (
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
            {renderLessons(unit.lessons)}
            </div>
          </ListItem>
          </div>
        ))
      }
      <ListItem>
        <div className="container new-unit">
        <h5 contentEditable="true" className="add-unit-item">Add Unit Title...</h5>
        <button className="btn btn-hopper creator-btn" onClick={props.handleAddUnit}>Add Unit</button>
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

export default CourseCreation;
