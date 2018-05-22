import React from "react";
import "./CourseCreation.css";
import { Link,  matchPath } from "react-router-dom";
import { List, ListItem} from "../List";

let routeParams = {};

const renderLessons = lessons => {
  return (
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
        <button className="btn btn-primary "><Link to="/course-creator/:action/course/:course_id/unit/:unit_id/lesson">Add Lesson</Link></button>
      </ListItem>
    </List>
  );
}

const renderUnits = props => {
  let unitIndex = 1;
  const units = props.course.units;
  return (
    <List>
      {
        units.map((unit, index) => (
          <ListItem
            key={unit._id}>
            <h5><strong>Unit <span className="unit-number">{index + 1}</span></strong> <span className="unit-name">{unit.name}</span></h5 > 
            {/* Render all sub lessons for the current unit */}
            {renderLessons(unit.lessons)}
          </ListItem>
        ))
      }
      <ListItem>
        <h5 contentEditable="true" className="add-unit-item">Add Unit Title...</h5>
        <button className="btn btn-primary" onClick={props.handleAddUnit}>Add Unit</button>
      </ListItem>
    </List>
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