import React from "react";
import "./CourseCreation.css";
import { Link } from "react-router-dom";
import { List, ListItem} from "../List";

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
        <button className="btn btn-primary ">Add Lesson</button>
      </ListItem>
    </List>
  );
}

const renderUnits = units => {
  //let lessons = units.lessons ? renderLessons(units.lessons) : null;
  let unitIndex = 1;
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
        <button className="btn btn-primary">Save</button>
        <button className="btn btn-primary ">Add Unit</button>
      </ListItem>
    </List>
  );
};

const CourseCreation = props => (
  <div className="main-content">
    {renderUnits(props.course.units)}

    {/* <div className="container" id="inner-preview">
        <div className="row" >
            <div className="col-lg-3">
                <h5><strong>Unit <span class="unit-number">1</span></strong></h5>
            </div>
            <div className="col-lg-5 text-center">
                <h5 contentEditable="true">Add Unit Title...</h5>
            </div>
            <div className="col-lg-4 text-right">
                <button className="btn btn-less">Save</button>
                <button className="btn btn-less">Add Lesson</button>
            </div>
            {/* <div className="col-lg-1 text-right">
                <span className="x"><i class="fa fa-check status-icon" aria-hidden="true"></i></span>
            </div> */}
        {/* </div><hr /> */} 
  </div>
);

export default CourseCreation;